-- AlterTable
ALTER TABLE "Application" ADD COLUMN "externalApplicationId" TEXT;
ALTER TABLE "Application" ADD COLUMN "syncedAt" DATETIME;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_University" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT,
    "source" TEXT,
    "name" TEXT NOT NULL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "usNewsRanking" INTEGER,
    "acceptanceRate" DECIMAL,
    "applicationSystem" TEXT,
    "tuitionInState" DECIMAL,
    "tuitionOutState" DECIMAL,
    "applicationFee" DECIMAL,
    "deadlines" JSONB,
    "lastSyncedAt" DATETIME,
    "raw" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_University" ("acceptanceRate", "applicationFee", "applicationSystem", "city", "country", "deadlines", "id", "name", "state", "tuitionInState", "tuitionOutState", "usNewsRanking") SELECT "acceptanceRate", "applicationFee", "applicationSystem", "city", "country", "deadlines", "id", "name", "state", "tuitionInState", "tuitionOutState", "usNewsRanking" FROM "University";
DROP TABLE "University";
ALTER TABLE "new_University" RENAME TO "University";
CREATE UNIQUE INDEX "University_externalId_key" ON "University"("externalId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
