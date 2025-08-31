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
      // 获取沟通记录
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

      const communications = await prisma.communicationRecord.findMany({
        where: {
          studentId: studentId as string,
          parentId
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return res.status(200).json(communications);
    }

    if (req.method === 'POST') {
      // 创建新的沟通记录
      const { studentId, title, content, type } = req.body;

      if (!studentId || !title || !content || !type) {
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

      const communication = await prisma.communicationRecord.create({
        data: {
          studentId,
          parentId,
          title,
          content,
          type,
          createdAt: new Date()
        }
      });

      return res.status(201).json(communication);
    }

    if (req.method === 'PUT') {
      // 更新沟通记录
      const { id, title, content } = req.body;

      if (!id || !title || !content) {
        return res.status(400).json({ error: '缺少必要字段' });
      }

      const communication = await prisma.communicationRecord.findFirst({
        where: {
          id,
          parentId
        }
      });

      if (!communication) {
        return res.status(404).json({ error: '记录不存在' });
      }

      const updated = await prisma.communicationRecord.update({
        where: { id },
        data: {
          title,
          content,
          updatedAt: new Date()
        }
      });

      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      // 删除沟通记录
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: '缺少记录ID' });
      }

      const communication = await prisma.communicationRecord.findFirst({
        where: {
          id: id as string,
          parentId
        }
      });

      if (!communication) {
        return res.status(404).json({ error: '记录不存在' });
      }

      await prisma.communicationRecord.delete({
        where: { id: id as string }
      });

      return res.status(200).json({ message: '删除成功' });
    }

    return res.status(405).json({ error: '方法不允许' });
  } catch (error) {
    console.error('Communication API error:', error);
    return res.status(500).json({ error: '服务器内部错误' });
  }
}

