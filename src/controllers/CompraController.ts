import { Prisma , PrismaClient} from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class compraController{
    async create(request: Request, response: Response){
        try {
            const { valorTotal,clienteId,produtoId } = request.body
            const cliente = await prisma.cliente.findUnique({
                where: { idCliente:Number(clienteId) },
              });
        
              const produto = await prisma.produto.findUnique({
                where: { idProduto: Number( produtoId) },
              });

            if(cliente && produto ){
                const compra = await prisma.compra.create(
                    {data:{
                        valorTotal: Number(valorTotal),
                        clienteId: cliente?.idCliente,
                        produtoId:produto?.idProduto
                        }
                    }
                )
                return response.status(201).json(compra)
            }
        } catch (error) {
            console.log(error) 
            response.status(500).json({error:error})
        }
    }

    async index(request: Request, response: Response){
        try {
            const { id } = request.params;
            const compra = await prisma.compra.findUnique({
                where:{
                    idCompra: Number(id)
                }
            })
            return response.status(201).json(compra)  
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }

    async show(request: Request, response: Response){
        try {
            const compras = await prisma.compra.findMany()
                response.status(200).json(compras)
        } 
        catch (error) {
            response.status(500).json({error:error})
        }
    }

    async destroy(request: Request, response: Response){
        try {
            const { id } = request.params;
            const compra = await prisma.compra.delete({
                where: {
                    idCompra: Number(id)
                }
            })
            return response.status(201).json(compra)
        } catch (error: any) {
            return response.status(500).json({ error: error.message })
        }
    }
}
export default new compraController();