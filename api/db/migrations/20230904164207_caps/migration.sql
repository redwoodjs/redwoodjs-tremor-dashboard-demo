/*
  Warnings:

  - You are about to drop the column `customers` on the `CompanyPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `profit` on the `CompanyPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `sales` on the `CompanyPerformance` table. All the data in the column will be lost.
  - Added the required column `Customers` to the `CompanyPerformance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Profit` to the `CompanyPerformance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Sales` to the `CompanyPerformance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompanyPerformance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "Sales" DECIMAL NOT NULL,
    "Profit" DECIMAL NOT NULL,
    "Customers" INTEGER NOT NULL
);
INSERT INTO "new_CompanyPerformance" ("date", "id") SELECT "date", "id" FROM "CompanyPerformance";
DROP TABLE "CompanyPerformance";
ALTER TABLE "new_CompanyPerformance" RENAME TO "CompanyPerformance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
