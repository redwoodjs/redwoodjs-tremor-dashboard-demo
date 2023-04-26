-- CreateTable
CREATE TABLE "Performance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "sales" DECIMAL NOT NULL,
    "profit" DECIMAL NOT NULL,
    "customers" INTEGER NOT NULL
);
