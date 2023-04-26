/*
  Warnings:

  - You are about to drop the `Performance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Performance";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CompanyPerformance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "sales" DECIMAL NOT NULL,
    "profit" DECIMAL NOT NULL,
    "customers" INTEGER NOT NULL
);
