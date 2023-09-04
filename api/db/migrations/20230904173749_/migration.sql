-- CreateTable
CREATE TABLE "Kpi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "progress" DECIMAL NOT NULL,
    "metricTarget" TEXT NOT NULL,
    "delta" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CompanyPerformance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "Sales" DECIMAL NOT NULL,
    "Profit" DECIMAL NOT NULL,
    "Customers" INTEGER NOT NULL
);

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
