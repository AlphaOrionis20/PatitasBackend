/*
  Warnings:

  - The primary key for the `compra` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "compra" DROP CONSTRAINT "compra_pkey",
ADD CONSTRAINT "compra_pkey" PRIMARY KEY ("idCompra");
