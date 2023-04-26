-- CreateTable
CREATE TABLE "SalesPerson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "leads" INTEGER NOT NULL,
    "sales" TEXT NOT NULL,
    "quota" TEXT NOT NULL,
    "variance" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL
);
