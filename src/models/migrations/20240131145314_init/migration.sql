/*
  Warnings:

  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_produtoId_fkey";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "Produto";

-- CreateTable
CREATE TABLE "produto" (
    "idProduto" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "tipo" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("idProduto")
);

-- CreateTable
CREATE TABLE "compra" (
    "clienteId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valorTotal" DECIMAL(65,30) NOT NULL,
    "idCompra" SERIAL NOT NULL,

    CONSTRAINT "compra_pkey" PRIMARY KEY ("clienteId","produtoId","idCompra","data","valorTotal")
);

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "user"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
