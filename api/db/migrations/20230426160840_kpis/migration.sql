-- CreateTable
CREATE TABLE "Kpi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "progress" DECIMAL NOT NULL,
    "target" TEXT NOT NULL,
    "delta" DECIMAL NOT NULL,
    "deltaType" TEXT NOT NULL
);
