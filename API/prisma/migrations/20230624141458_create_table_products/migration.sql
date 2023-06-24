-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT 'Não Informado',
    "id_purchase" INTEGER NOT NULL,
    "units" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "added" BOOLEAN NOT NULL
);
