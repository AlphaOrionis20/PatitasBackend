/*
  Warnings:

  - The primary key for the `Compra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `valor` on the `Compra` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_clienteId_fkey";

-- AlterTable
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_pkey",
ALTER COLUMN "data" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "valor" SET DATA TYPE DECIMAL(65,30),
ADD CONSTRAINT "Compra_pkey" PRIMARY KEY ("clienteId", "produtoId", "idCompra", "data", "valor");

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "preco" SET DATA TYPE DECIMAL(65,30);

-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "user" (
    "idCliente" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("idCliente")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "user"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
