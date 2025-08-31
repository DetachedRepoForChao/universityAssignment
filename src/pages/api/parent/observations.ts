import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';
import { verifyJWT } from '../../../services/auth';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 验证JWT token
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ error: '未授权访问' });
    }

    const decoded = verifyJWT(token);
    if (!decoded || decoded.role !== 'parent') {
      return res.status(403).json({ error: '权限不足' });
    }

    const parentId = decoded.id;

    if (req.method === 'GET') {
      // 获取观察记录
      const { studentId } = req.query;
      
      if (!studentId) {
        return res.status(400).json({ error: '缺少学生ID' });
      }

      // 验证家长与学生的关系
      const relationship = await prisma.studentParent.findFirst({
        where: {
          parentId,
          studentId: studentId as string
        }
      });

      if (!relationship) {
        return res.status(403).json({ error: '无权访问该学生的信息' });
      }

      const observations = await prisma.observationRecord.findMany({
        where: {
          studentId: studentId as string,
          parentId
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return res.status(200).json(observations);
    }

    if (req.method === 'POST') {
      // 创建新的观察记录
      const { studentId, title, content, category, priority } = req.body;

      if (!studentId || !title || !content || !category) {
        return res.status(400).json({ error: '缺少必要字段' });
      }

      // 验证家长与学生的关系
      const relationship = await prisma.studentParent.findFirst({
        where: {
          parentId,
          studentId
        }
      });

      if (!relationship) {
        return res.status(403).json({ error: '无权访问该学生的信息' });
      }

      const observation = await prisma.observationRecord.create({
        data: {
          studentId,
          parentId,
          title,
          content,
          category,
          priority: priority || 'medium',
          createdAt: new Date()
        }
      });

      return res.status(201).json(observation);
    }

    if (req.method === 'PUT') {
      // 更新观察记录
      const { id, title, content, category, priority } = req.body;

      if (!id || !title || !content || !category) {
        return res.status(400).json({ error: '缺少必要字段' });
      }

      const observation = await prisma.observationRecord.findFirst({
        where: {
          id,
          parentId
        }
      });

      if (!observation) {
        return res.status(404).json({ error: '记录不存在' });
      }

      const updated = await prisma.observationRecord.update({
        where: { id },
        data: {
          title,
          content,
          category,
          priority,
          updatedAt: new Date()
        }
      });

      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      // 删除观察记录
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: '缺少记录ID' });
      }

      const observation = await prisma.observationRecord.findFirst({
        where: {
          id: id as string,
          parentId
        }
      });

      if (!observation) {
        return res.status(404).json({ error: '记录不存在' });
      }

      await prisma.observationRecord.delete({
        where: { id: id as string }
      });

      return res.status(200).json({ message: '删除成功' });
    }

    return res.status(405).json({ error: '方法不允许' });
  } catch (error) {
    console.error('Observation API error:', error);
    return res.status(500).json({ error: '服务器内部错误' });
  }
}

