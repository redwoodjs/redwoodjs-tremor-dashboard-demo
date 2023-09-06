-- CreateTable
CREATE TABLE "Kpi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "progress" DECIMAL(65,30) NOT NULL,
    "metricTarget" TEXT NOT NULL,
    "delta" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL,

    CONSTRAINT "Kpi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPerformance" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "Sales" DECIMAL(65,30) NOT NULL,
    "Profit" DECIMAL(65,30) NOT NULL,
    "Customers" INTEGER NOT NULL,

    CONSTRAINT "CompanyPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesPerson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "leads" INTEGER NOT NULL,
    "sales" TEXT NOT NULL,
    "quota" TEXT NOT NULL,
    "variance" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL,

    CONSTRAINT "SalesPerson_pkey" PRIMARY KEY ("id")
);
