-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Performance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "sales" DECIMAL NOT NULL,
    "profit" DECIMAL NOT NULL,
    "customers" INTEGER NOT NULL
);
INSERT INTO "new_Performance" ("customers", "date", "id", "profit", "sales") SELECT "customers", "date", "id", "profit", "sales" FROM "Performance";
DROP TABLE "Performance";
ALTER TABLE "new_Performance" RENAME TO "Performance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
