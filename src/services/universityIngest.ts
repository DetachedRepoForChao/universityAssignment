import { prisma } from "../lib/prisma";

export async function upsertUniversityFromSource(uni: {
  externalId: string;
  name: string;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  acceptanceRate?: number | null;
  tuitionInState?: number | null;
  tuitionOutState?: number | null;
  applicationFee?: number | null;
  deadlines?: any;
  raw: any;
}, source: "COMMON_APP" | "OPEN_DATA") {
  // Using externalId unique field; if not present, create with new uuid and store externalId
  const existing = await prisma.university.findFirst({ where: { externalId: uni.externalId } });
  if (existing) {
    return prisma.university.update({
      where: { id: existing.id },
      data: {
        name: uni.name,
        country: uni.country ?? null,
        state: uni.state ?? null,
        city: uni.city ?? null,
        acceptanceRate: uni.acceptanceRate ?? null,
        tuitionInState: uni.tuitionInState ?? null,
        tuitionOutState: uni.tuitionOutState ?? null,
        applicationFee: uni.applicationFee ?? null,
        deadlines: uni.deadlines ?? null,
        source,
        lastSyncedAt: new Date(),
        raw: uni.raw,
        isActive: true,
      },
    });
  }
  return prisma.university.create({
    data: {
      externalId: uni.externalId,
      name: uni.name,
      country: uni.country ?? null,
      state: uni.state ?? null,
      city: uni.city ?? null,
      acceptanceRate: uni.acceptanceRate ?? null,
      tuitionInState: uni.tuitionInState ?? null,
      tuitionOutState: uni.tuitionOutState ?? null,
      applicationFee: uni.applicationFee ?? null,
      deadlines: uni.deadlines ?? null,
      source,
      lastSyncedAt: new Date(),
      raw: uni.raw,
      isActive: true,
    },
  });
}



