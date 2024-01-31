
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { Request, Response } from 'express'

class produtoController{
    async create (request: Request, response: Response){
        try {
            const produto = await prisma.produto.create(
                {data:{
                    nome: request.body.nome,
                    quantidadeEstoque: request.body.quantidadeEstoque,
                    preco:request.body.preco,
                    tipo: request.body.tipo,
                    fornecedor: request.body.fornecedor
                    }
                }
            )
            response.status(201).json({msg: `Produto Cadastrado`,produto})
        } catch (error) {
        }
    }

    async index(request: Request, response: Response){
        try {
            const { id } = request.params;
            const produto = await prisma.produto.findUnique({
                where:{
                    idProduto: Number(id)
                }
            })
            return response.status(201).json(produto)  
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }
    
    async show(request: Request, response: Response){
        try {
            const produtos = await prisma.produto.findMany()
                response.status(200).json(produtos)
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }

    async update(request: Request, response: Response){
        try {
            const { id } = request.params;
            const { nome,tipo,fornecedor,quantidadeEstoque,preco }= request.body;
            const produto = await prisma.produto.update({
                data: request.body,
                where: {
                    idProduto: Number(id)
                }
            })
            return response.status(201).json(produto)
        } 
        catch (error: any) {
            return response.status(500).json({ error: error.message })
        }
    }

    async destroy(request: Request, response: Response){
        try {
            const { id } = request.params;
            const produto = await prisma.produto.delete({
                where: {
                    idProduto: Number(id)
                }
            })
            return response.status(201).json(produto)
        } catch (error: any) {
            return response.status(500).json({ error: error.message })
        }
    }
}
export default new produtoController();