import { getSupabasePrisma } from "../lib/prisma-supabase";

export async function getStudentApplications(studentId: string) {
  const prisma = await getSupabasePrisma();
  return prisma.application.findMany({
    where: { studentId },
    include: { university: true, requirements: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function createApplication(params: {
  studentId: string;
  universityId: string;
  applicationType?: "EARLY_DECISION" | "EARLY_ACTION" | "REGULAR_DECISION" | "ROLLING_ADMISSION" | null;
  deadline?: Date | null;
}) {
  const prisma = await getSupabasePrisma();
  return prisma.application.create({
    data: {
      studentId: params.studentId,
      universityId: params.universityId,
      applicationType: params.applicationType ?? null,
      deadline: params.deadline ?? null,
      status: "NOT_STARTED",
    },
  });
}

export async function updateApplication(id: string, data: Record<string, unknown>) {
  const prisma = await getSupabasePrisma();
  return prisma.application.update({ where: { id }, data });
}

export async function deleteApplication(id: string) {
  const prisma = await getSupabasePrisma();
  return prisma.application.delete({ where: { id } });
}

export async function getParentApplications(parentId: string, studentId?: string) {
  const prisma = await getSupabasePrisma();
  const links = await prisma.studentParent.findMany({
    where: { parentId },
    select: { studentId: true },
  });
  const allowedStudentIds = new Set(links.map(l => l.studentId));
  if (allowedStudentIds.size === 0) return [];

  let whereClause: { studentId: any } = { studentId: { in: Array.from(allowedStudentIds) } };
  if (studentId) {
    if (!allowedStudentIds.has(studentId)) return [];
    whereClause = { studentId } as any;
  }

  return prisma.application.findMany({
    where: whereClause,
    include: { 
      university: true, 
      student: true,
      appNotes: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          content: true,
          authorType: true,
          createdAt: true,
        }
      }
    },
    orderBy: { createdAt: "desc" },
  });
}


