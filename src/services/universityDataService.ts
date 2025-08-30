import { fetchWithRetry } from './integrations/http';
import { prisma } from '../lib/prisma';

export interface UniversityDetail {
  id: string;
  name: string;
  country?: string;
  state?: string;
  city?: string;
  usNewsRanking?: number;
  acceptanceRate?: number;
  applicationSystem?: string;
  tuitionInState?: number;
  tuitionOutState?: number;
  applicationFee?: number;
  deadlines?: Record<string, any>;
  lastSyncedAt?: string;
  raw?: Record<string, any>;
  isActive?: boolean;
}

export interface SearchFilters {
  q?: string;
  country?: string;
  state?: string;
  city?: string;
  minRank?: number;
  maxRank?: number;
  minAcceptance?: number;
  maxAcceptance?: number;
}

class UniversityDataService {
  private cache = new Map<string, { data: UniversityDetail; timestamp: number }>();
  private readonly CACHE_DURATION = 30 * 60 * 1000; // 30分钟缓存

  async searchUniversities(filters: SearchFilters): Promise<UniversityDetail[]> {
    try {
      // 1. 首先从数据库获取数据
      let universities = await this.getFromDatabase(filters);
      
      // 2. 如果数据库数据不足或过期，从外部API获取并更新
      if (universities.length === 0 || this.shouldRefreshData()) {
        await this.refreshFromExternalAPIs();
        universities = await this.getFromDatabase(filters);
      }
      
      // 3. 应用过滤器
      return this.applyFilters(universities, filters);
      
    } catch (error) {
      console.error('Error searching universities:', error);
      // 如果出错，尝试从数据库获取缓存数据
      try {
        return await this.getFromDatabase(filters);
      } catch (dbError) {
        throw new Error('Failed to search universities');
      }
    }
  }

  async getUniversityDetails(universityId: string): Promise<UniversityDetail | null> {
    // 检查缓存
    const cached = this.cache.get(universityId);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    try {
      // 从多个源获取详细信息
      const details = await this.fetchUniversityDetails(universityId);
      
      if (details) {
        // 更新缓存
        this.cache.set(universityId, {
          data: details,
          timestamp: Date.now()
        });
      }
      
      return details;
    } catch (error) {
      console.error('Error fetching university details:', error);
      return null;
    }
  }

  private async fetchFromCommonApp(filters: SearchFilters): Promise<UniversityDetail[]> {
    if (!process.env.COMMON_APP_TOKEN) {
      return [];
    }

    try {
      const response = await fetchWithRetry(
        'https://api.commonapp.org/v1/universities',
        {
          headers: {
            'Authorization': `Bearer ${process.env.COMMON_APP_TOKEN}`,
            'Content-Type': 'application/json'
          }
        },
        { retries: 3 }
      );

      if (!response.ok) {
        throw new Error(`Common App API error: ${response.status}`);
      }

      const data = await response.json();
      return this.transformCommonAppData(data.data || []);
    } catch (error) {
      console.error('Common App API error:', error);
      return [];
    }
  }

  private async fetchFromOpenData(filters: SearchFilters): Promise<UniversityDetail[]> {
    if (!process.env.OPEN_DATA_KEY) {
      return [];
    }

    try {
      const response = await fetchWithRetry(
        'https://api.data.gov/ed/collegescorecard/v1/schools',
        {
          headers: {
            'X-API-KEY': process.env.OPEN_DATA_KEY
          }
        },
        { retries: 3 }
      );

      if (!response.ok) {
        throw new Error(`Open Data API error: ${response.status}`);
      }

      const data = await response.json();
      return this.transformOpenDataData(data.results || []);
    } catch (error) {
      console.error('Open Data API error:', error);
      return [];
    }
  }

  private async fetchUniversityDetails(universityId: string): Promise<UniversityDetail | null> {
    // 这里可以实现从多个源获取详细信息的逻辑
    // 例如：Common App、大学官网、College Scorecard等
    return null;
  }

  private transformCommonAppData(data: any[]): UniversityDetail[] {
    return data.map(item => ({
      id: item.id || `common_${item.name}`,
      name: item.name,
      country: item.country || 'USA',
      state: item.state,
      city: item.city,
      usNewsRanking: item.ranking,
      acceptanceRate: item.acceptanceRate ? item.acceptanceRate / 100 : undefined,
      applicationSystem: 'Common App',
      tuitionInState: item.tuitionInState,
      tuitionOutState: item.tuitionOutState,
      applicationFee: item.applicationFee,
      deadlines: item.deadlines,
      requirements: item.requirements || [],
      description: item.description
    }));
  }

  private transformOpenDataData(data: any[]): UniversityDetail[] {
    return data.map(item => ({
      id: item.id || `opendata_${item.school.name}`,
      name: item.school.name,
      country: 'USA',
      state: item.school.state,
      city: item.school.city,
      usNewsRanking: item.rankings?.rank,
      acceptanceRate: item.latest?.admissions?.admission_rate?.overall,
      applicationSystem: 'Various',
      tuitionInState: item.latest?.cost?.tuition?.in_state,
      tuitionOutState: item.latest?.cost?.tuition?.out_of_state,
      applicationFee: item.latest?.cost?.application_fee,
      deadlines: {},
      requirements: [],
      description: item.school?.school_url
    }));
  }

  private mergeUniversityData(commonApp: UniversityDetail[], openData: UniversityDetail[]): UniversityDetail[] {
    const merged = new Map<string, UniversityDetail>();
    
    // 添加Common App数据
    commonApp.forEach(uni => {
      merged.set(uni.name.toLowerCase(), uni);
    });
    
    // 合并Open Data数据（如果名称匹配）
    openData.forEach(uni => {
      const key = uni.name.toLowerCase();
      const existing = merged.get(key);
      
      if (existing) {
        // 合并数据，优先使用Common App的数据
        merged.set(key, {
          ...existing,
          usNewsRanking: existing.usNewsRanking || uni.usNewsRanking,
          acceptanceRate: existing.acceptanceRate || uni.acceptanceRate,
          tuitionInState: existing.tuitionInState || uni.tuitionInState,
          tuitionOutState: existing.tuitionOutState || uni.tuitionOutState,
          applicationFee: existing.applicationFee || uni.applicationFee
        });
      } else {
        merged.set(key, uni);
      }
    });
    
    return Array.from(merged.values());
  }

  private applyFilters(data: UniversityDetail[], filters: SearchFilters): UniversityDetail[] {
    let filtered = data;

    // 关键词搜索
    if (filters.q) {
      const query = filters.q.toLowerCase();
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(query) ||
        uni.city?.toLowerCase().includes(query) ||
        uni.state?.toLowerCase().includes(query) ||
        uni.country?.toLowerCase().includes(query)
      );
    }

    // 地理位置过滤
    if (filters.country) {
      filtered = filtered.filter(uni => 
        uni.country?.toLowerCase().includes(filters.country!.toLowerCase())
      );
    }
    if (filters.state) {
      filtered = filtered.filter(uni => 
        uni.state?.toLowerCase().includes(filters.state!.toLowerCase())
      );
    }
    if (filters.city) {
      filtered = filtered.filter(uni => 
        uni.city?.toLowerCase().includes(filters.city!.toLowerCase())
      );
    }

    // 排名过滤
    if (filters.minRank) {
      filtered = filtered.filter(uni => 
        uni.usNewsRanking && uni.usNewsRanking >= filters.minRank!
      );
    }
    if (filters.maxRank) {
      filtered = filtered.filter(uni => 
        uni.usNewsRanking && uni.usNewsRanking <= filters.maxRank!
      );
    }

    // 录取率过滤
    if (filters.minAcceptance) {
      filtered = filtered.filter(uni => 
        uni.acceptanceRate && uni.acceptanceRate >= filters.minAcceptance! / 100
      );
    }
    if (filters.maxAcceptance) {
      filtered = filtered.filter(uni => 
        uni.acceptanceRate && uni.acceptanceRate <= filters.maxAcceptance! / 100
      );
    }

    // 排序：按排名，然后按名称
    return filtered.sort((a, b) => {
      if (a.usNewsRanking && b.usNewsRanking) {
        return a.usNewsRanking - b.usNewsRanking;
      }
      if (a.usNewsRanking) return -1;
      if (b.usNewsRanking) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  // 从数据库获取大学数据
  private async getFromDatabase(filters: SearchFilters): Promise<UniversityDetail[]> {
    const where: any = { isActive: true };

    // 关键词搜索
    if (filters.q) {
      where.OR = [
        { name: { contains: filters.q } },
        { country: { contains: filters.q } },
        { state: { contains: filters.q } },
        { city: { contains: filters.q } }
      ];
    }

    // 地理位置过滤
    if (filters.country) {
      where.country = { contains: filters.country };
    }
    if (filters.state) {
      where.state = { contains: filters.state };
    }
    if (filters.city) {
      where.city = { contains: filters.city };
    }

    // 排名过滤
    if (filters.minRank) {
      where.usNewsRanking = { ...where.usNewsRanking, gte: filters.minRank };
    }
    if (filters.maxRank) {
      where.usNewsRanking = { ...where.usNewsRanking, lte: filters.maxRank };
    }

    // 录取率过滤
    if (filters.minAcceptance) {
      where.acceptanceRate = { ...where.acceptanceRate, gte: filters.minAcceptance / 100 };
    }
    if (filters.maxAcceptance) {
      where.acceptanceRate = { ...where.acceptanceRate, lte: filters.maxAcceptance / 100 };
    }

    const universities = await prisma.university.findMany({
      where,
      select: {
        id: true,
        name: true,
        country: true,
        state: true,
        city: true,
        usNewsRanking: true,
        acceptanceRate: true,
        applicationSystem: true,
        tuitionInState: true,
        tuitionOutState: true,
        applicationFee: true,
        deadlines: true,

        source: true,
        lastSyncedAt: true
      },
      orderBy: [
        { usNewsRanking: 'asc' },
        { name: 'asc' }
      ],
      take: 100
    });

    return universities.map(uni => ({
      id: uni.id,
      name: uni.name,
      country: uni.country || undefined,
      state: uni.state || undefined,
      city: uni.city || undefined,
      usNewsRanking: uni.usNewsRanking || undefined,
      acceptanceRate: uni.acceptanceRate ? Number(uni.acceptanceRate) : undefined,
      applicationSystem: uni.applicationSystem || undefined,
      tuitionInState: uni.tuitionInState ? Number(uni.tuitionInState) : undefined,
      tuitionOutState: uni.tuitionOutState ? Number(uni.tuitionOutState) : undefined,
      applicationFee: uni.applicationFee ? Number(uni.applicationFee) : undefined,
      deadlines: uni.deadlines as Record<string, any> || undefined,

    }));
  }

  // 检查是否需要刷新数据
  private shouldRefreshData(): boolean {
    // 如果数据库中没有数据，或者最后同步时间超过24小时，则需要刷新
    return false; // 暂时返回false，避免频繁刷新
  }

  // 从外部API刷新数据并存储到数据库
  async refreshFromExternalAPIs(): Promise<void> {
    try {
      // 1. 从Common App API获取数据
      const commonAppData = await this.fetchFromCommonApp({});
      
      // 2. 从Open Data API获取数据
      const openDataData = await this.fetchFromOpenData({});
      
      // 3. 合并和去重数据
      const mergedData = this.mergeUniversityData(commonAppData, openDataData);
      
      // 4. 批量更新数据库
      await this.batchUpsertUniversities(mergedData);
      
    } catch (error) {
      console.error('Error refreshing from external APIs:', error);
      throw error;
    }
  }

  // 批量更新大学数据
  private async batchUpsertUniversities(universities: UniversityDetail[]): Promise<void> {
    const batchSize = 50;
    
    for (let i = 0; i < universities.length; i += batchSize) {
      const batch = universities.slice(i, i + batchSize);
      
      await Promise.all(
        batch.map(uni => this.upsertUniversity(uni))
      );
    }
  }

  // 更新或插入单个大学
  private async upsertUniversity(uni: UniversityDetail): Promise<void> {
    const data = {
      name: uni.name,
      country: uni.country,
      state: uni.state,
      city: uni.city,
      usNewsRanking: uni.usNewsRanking,
      acceptanceRate: uni.acceptanceRate,
      applicationSystem: uni.applicationSystem,
      tuitionInState: uni.tuitionInState,
      tuitionOutState: uni.tuitionOutState,
      applicationFee: uni.applicationFee,
      deadlines: uni.deadlines,

      lastSyncedAt: new Date(),
      raw: { name: uni.name, country: uni.country, state: uni.state, city: uni.city }
    };

    // 检查大学是否已存在
    const existing = await prisma.university.findFirst({
      where: { name: uni.name }
    });

    if (existing) {
      // 更新现有大学
      await prisma.university.update({
        where: { id: existing.id },
        data: data
      });
    } else {
      // 创建新大学
      await prisma.university.create({
        data: {
          ...data,
          source: 'COMMON_APP' as any,
          isActive: true
        }
      });
    }
  }

  // 清理过期缓存
  clearExpiredCache() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > this.CACHE_DURATION) {
        this.cache.delete(key);
      }
    }
  }
}

export const universityDataService = new UniversityDataService();

// 定期清理缓存
setInterval(() => {
  universityDataService.clearExpiredCache();
}, 5 * 60 * 1000); // 每5分钟清理一次
