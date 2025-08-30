import { prisma } from "../lib/prisma";

export async function getParentStudents(parentId: string) {
	return prisma.studentParent.findMany({
		where: { parentId },
		select: {
			student: {
				select: { id: true, name: true, email: true },
			},
			relationship: true,
		},
	});
}

