/*
  Warnings:

  - Added the required column `cpf` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;
