# 🎯 演示数据说明文档

## 📊 数据概览

本系统包含完整的演示数据，涵盖学生、家长、管理员、大学和申请等所有核心实体。演示数据设计用于展示系统的完整功能，包括各种状态和场景。

## 🗄️ 数据库结构

### 核心实体
- **Student**: 学生信息
- **Parent**: 家长信息  
- **Admin**: 管理员信息
- **University**: 大学信息
- **Application**: 申请记录
- **ApplicationNote**: 申请备注
- **ApplicationRequirement**: 申请要求
- **ApplicationDocument**: 申请文档
- **StudentParent**: 学生-家长关联
- **SyncLog**: 同步日志

## 👥 用户数据

### 学生账号 (Students)

#### 1. 张三 (zhang.san@example.com)
- **基本信息**
  - 姓名: 张三
  - 邮箱: zhang.san@example.com
  - 毕业年份: 2026
  - GPA: 3.8
  - SAT分数: 1450
  - ACT分数: 32
  - 目标国家: ["USA", "Canada"]
  - 意向专业: ["Computer Science", "Mathematics"]

- **申请记录**
  - MIT (麻省理工学院) - 状态: SUBMITTED
  - Stanford (斯坦福大学) - 状态: IN_PROGRESS
  - UC Berkeley (加州大学伯克利分校) - 状态: NOT_STARTED

#### 2. 李四 (li.si@example.com)
- **基本信息**
  - 姓名: 李四
  - 邮箱: li.si@example.com
  - 毕业年份: 2026
  - GPA: 3.9
  - SAT分数: 1500
  - ACT分数: 34
  - 目标国家: ["USA", "UK"]
  - 意向专业: ["Physics", "Engineering"]

- **申请记录**
  - Harvard (哈佛大学) - 状态: SUBMITTED
  - Yale (耶鲁大学) - 状态: UNDER_REVIEW
  - Princeton (普林斯顿大学) - 状态: NOT_STARTED

#### 3. 王五 (wang.wu@example.com)
- **基本信息**
  - 姓名: 王五
  - 邮箱: wang.wu@example.com
  - 毕业年份: 2026
  - GPA: 3.7
  - SAT分数: 1400
  - ACT分数: 30
  - 目标国家: ["USA", "Australia"]
  - 意向专业: ["Business", "Economics"]

- **申请记录**
  - NYU (纽约大学) - 状态: ACCEPTED
  - Boston University (波士顿大学) - 状态: WAITLISTED
  - USC (南加州大学) - 状态: REJECTED

### 家长账号 (Parents)

#### 1. 张父 (zhang.father@example.com)
- **基本信息**
  - 姓名: 张父
  - 邮箱: zhang.father@example.com
  - 电话: +86-138-0000-0001
  - 关联学生: 张三

#### 2. 李父 (li.father@example.com)
- **基本信息**
  - 姓名: 李父
  - 邮箱: li.father@example.com
  - 电话: +86-138-0000-0002
  - 关联学生: 李四

#### 3. 王父 (wang.father@example.com)
- **基本信息**
  - 姓名: 王父
  - 邮箱: wang.father@example.com
  - 电话: +86-138-0000-0003
  - 关联学生: 王五

### 管理员账号 (Admins)

#### 1. 系统管理员 (admin@example.com)
- **基本信息**
  - 姓名: 系统管理员
  - 邮箱: admin@example.com
  - 角色: super_admin
  - 权限: 完整系统管理权限

## 🏫 大学数据

### 美国大学

#### 1. 麻省理工学院 (MIT)
- **基本信息**
  - 名称: Massachusetts Institute of Technology
  - 国家: USA
  - 州: Massachusetts
  - 城市: Cambridge
  - US News 排名: 1
  - 录取率: 7.3%
  - 申请系统: Common App
  - 州内学费: $53,790
  - 州外学费: $53,790
  - 申请费: $75

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-01

#### 2. 斯坦福大学 (Stanford)
- **基本信息**
  - 名称: Stanford University
  - 国家: USA
  - 州: California
  - 城市: Stanford
  - US News 排名: 3
  - 录取率: 4.3%
  - 申请系统: Common App
  - 州内学费: $56,169
  - 州外学费: $56,169
  - 申请费: $90

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-02

#### 3. 哈佛大学 (Harvard)
- **基本信息**
  - 名称: Harvard University
  - 国家: USA
  - 州: Massachusetts
  - 城市: Cambridge
  - US News 排名: 2
  - 录取率: 4.6%
  - 申请系统: Common App
  - 州内学费: $54,768
  - 州外学费: $54,768
  - 申请费: $85

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-01

#### 4. 耶鲁大学 (Yale)
- **基本信息**
  - 名称: Yale University
  - 国家: USA
  - 州: Connecticut
  - 城市: New Haven
  - US News 排名: 4
  - 录取率: 6.2%
  - 申请系统: Common App
  - 州内学费: $59,950
  - 州外学费: $59,950
  - 申请费: $80

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-02

#### 5. 普林斯顿大学 (Princeton)
- **基本信息**
  - 名称: Princeton University
  - 国家: USA
  - 州: New Jersey
  - 城市: Princeton
  - US News 排名: 1
  - 录取率: 5.8%
  - 申请系统: Common App
  - 州内学费: $57,410
  - 州外学费: $57,410
  - 申请费: $70

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-01

#### 6. 纽约大学 (NYU)
- **基本信息**
  - 名称: New York University
  - 国家: USA
  - 州: New York
  - 城市: New York
  - US News 排名: 25
  - 录取率: 16.2%
  - 申请系统: Common App
  - 州内学费: $56,500
  - 州外学费: $56,500
  - 申请费: $80

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-01

#### 7. 波士顿大学 (Boston University)
- **基本信息**
  - 名称: Boston University
  - 国家: USA
  - 州: Massachusetts
  - 城市: Boston
  - US News 排名: 42
  - 录取率: 18.9%
  - 申请系统: Common App
  - 州内学费: $62,360
  - 州外学费: $62,360
  - 申请费: $80

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-02

#### 8. 南加州大学 (USC)
- **基本信息**
  - 名称: University of Southern California
  - 国家: USA
  - 州: California
  - 城市: Los Angeles
  - US News 排名: 27
  - 录取率: 16.1%
  - 申请系统: Common App
  - 州内学费: $64,726
  - 州外学费: $64,726
  - 申请费: $85

- **截止日期**
  - Early Decision: 2024-11-01
  - Regular Decision: 2025-01-15

### 其他国家大学

#### 9. 多伦多大学 (University of Toronto)
- **基本信息**
  - 名称: University of Toronto
  - 国家: Canada
  - 州: Ontario
  - 城市: Toronto
  - 排名: 世界排名 18
  - 录取率: 43%
  - 申请系统: OUAC
  - 国际学生学费: CAD 60,000
  - 申请费: CAD 180

#### 10. 牛津大学 (University of Oxford)
- **基本信息**
  - 名称: University of Oxford
  - 国家: UK
  - 州: England
  - 城市: Oxford
  - 排名: 世界排名 2
  - 录取率: 17%
  - 申请系统: UCAS
  - 国际学生学费: £39,010
  - 申请费: £27.50

## 📝 申请数据

### 申请状态分布
- **NOT_STARTED**: 3 个申请
- **IN_PROGRESS**: 2 个申请
- **SUBMITTED**: 3 个申请
- **UNDER_REVIEW**: 1 个申请
- **ACCEPTED**: 1 个申请
- **REJECTED**: 1 个申请
- **WAITLISTED**: 1 个申请

### 申请类型分布
- **EARLY_DECISION**: 2 个申请
- **EARLY_ACTION**: 1 个申请
- **REGULAR_DECISION**: 6 个申请
- **ROLLING_ADMISSION**: 2 个申请

## 💬 备注数据

### 家长备注示例
1. **MIT申请备注**
   - 内容: "已提交所有必需材料，包括推荐信和成绩单"
   - 作者: 张父
   - 时间: 2024-01-15

2. **Stanford申请备注**
   - 内容: "正在准备补充材料，预计下周完成"
   - 作者: 张父
   - 时间: 2024-01-14

3. **Harvard申请备注**
   - 内容: "申请已提交，等待面试通知"
   - 作者: 李父
   - 时间: 2024-01-13

## 📊 统计数据

### 系统概览
- **总学生数**: 3
- **总家长数**: 3
- **总管理员数**: 1
- **总大学数**: 10
- **总申请数**: 11
- **总备注数**: 3

### 申请成功率
- **录取率**: 9.1% (1/11)
- **候补率**: 9.1% (1/11)
- **拒绝率**: 9.1% (1/11)
- **进行中**: 27.3% (3/11)
- **已提交**: 27.3% (3/11)

## 🔄 数据同步

### 同步日志示例
1. **Common App 同步**
   - 开始时间: 2024-01-15 10:00:00
   - 状态: COMPLETED
   - 同步数量: 5 个申请
   - 更新时间: 3 个申请

2. **大学官网同步**
   - 开始时间: 2024-01-15 14:00:00
   - 状态: COMPLETED
   - 同步数量: 8 个申请
   - 状态更新: 2 个申请

## 🎯 演示场景

### 场景1: 学生申请流程
1. 学生登录查看申请概览
2. 查看截止日期日历
3. 使用大学比较工具
4. 管理个人资料

### 场景2: 家长监控流程
1. 家长登录选择关联学生
2. 查看申请状态和财务概览
3. 添加和管理备注
4. 记录沟通和观察

### 场景3: 管理员管理流程
1. 管理员登录查看系统统计
2. 管理用户和大学数据
3. 监控数据同步状态
4. 发送截止日期提醒

## 📋 数据重置

### 重置命令
```bash
# 完全重置数据库
npx prisma migrate reset --force

# 重新填充演示数据
npx tsx prisma/simple_seed.ts
```

### 数据备份
```bash
# 备份数据库文件
cp prisma/dev.db prisma/dev.db.backup

# 恢复数据库
cp prisma/dev.db.backup prisma/dev.db
```

## ⚠️ 注意事项

1. **演示数据仅供测试使用**
2. **生产环境请使用真实数据**
3. **定期备份重要数据**
4. **敏感信息请加密存储**
5. **遵守数据保护法规**

---

**最后更新**: 2024年1月15日
**版本**: 1.0.0
**维护者**: 开发团队
