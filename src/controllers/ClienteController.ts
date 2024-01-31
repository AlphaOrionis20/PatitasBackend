
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { Request, Response } from 'express'

class clienteController{

    async create(request: Request, response: Response) {
        try {
            const cliente = await prisma.cliente.create(
                {data:{
                    nome:request.body.nome,
                    email:request.body.email,
                    cpf:request.body.cpf,
                    endereco:request.body.endereco,
                    telefone:request.body.telefone
                    }
                }
            )
            response.status(201).json({msg: `Cliente Cadastrado`,cliente})
        } 
        catch (error) {        
        }  
    }

    async index(request: Request, response: Response){
        try {
            const { id } = request.params;
            const cliente = await prisma.cliente.findUnique({
                where:{
                    idCliente: Number(id)
                }
            })
            return response.status(201).json(cliente)  
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }

    async show(request: Request, response: Response){
        try {
            const clientes = await prisma.cliente.findMany()
                response.status(200).json(clientes)
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }

    async update(request: Request, response: Response){
        try {
            const { id } = request.params;
            const { nome,endereco,telefone,cpf,email }= request.body;
            const cliente = await prisma.cliente.update({
                data: request.body,
                where: {
                    idCliente: Number(id)
                }
            })
            return response.status(201).json(cliente)
        } 
        catch (error: any) {
            return response.status(500).json({ error: error.message })
        }
    }

    async destroy(request: Request, response: Response){
        try {
            const { id } = request.params;
            const cliente = await prisma.cliente.delete({
                where: {
                    idCliente: Number(id)
                }
            })
            return response.status(201).json(cliente)
        } catch (error: any) {
            return response.status(500).json({ error: error.message })
        }
    }
}
export default new clienteController();