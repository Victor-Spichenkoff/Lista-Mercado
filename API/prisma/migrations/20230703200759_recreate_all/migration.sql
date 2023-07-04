-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Não Informado',
    "id_purchase" INTEGER NOT NULL,
    "units" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "added" BOOLEAN NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
