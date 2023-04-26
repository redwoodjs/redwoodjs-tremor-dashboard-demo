-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kpi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "progress" DECIMAL NOT NULL,
    "target" TEXT NOT NULL,
    "delta" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL
);
INSERT INTO "new_Kpi" ("delta", "deltaType", "id", "metric", "progress", "target", "title") SELECT "delta", "deltaType", "id", "metric", "progress", "target", "title" FROM "Kpi";
DROP TABLE "Kpi";
ALTER TABLE "new_Kpi" RENAME TO "Kpi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
