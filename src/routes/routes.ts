import { Router } from "express";
const router = Router();

import clienteController from "../controllers/ClienteController"

router.post("/user", clienteController.create)
router.get("/users", clienteController.show)
router.get("/user/:id", clienteController.index)
router.put("/user/:id", clienteController.update)
router.delete("/userDelete/:id", clienteController.destroy)

import produtoController from "../controllers/ProdutoController"

router.post("/product", produtoController.create)
router.get("/products", produtoController.show)
router.get("/product/:id", produtoController.index)
router.put("/product/:id", produtoController.update)
router.delete("/productDelete/:id", produtoController.destroy)

import compraController from "../controllers/CompraController"

router.post("/compra", compraController.create)
router.get("/compras", compraController.show)
router.get("/compra/:id", compraController.index)
router.delete("/compraDelete/:id", compraController.destroy)

export default router;