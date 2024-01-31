import { Router } from "express";
const router = Router();

import clienteController from "../controllers/ClienteController"

router.post("/user", clienteController.create)
router.get("/users", clienteController.show)
router.get("/user/:id", clienteController.index)
router.put("/user/:id", clienteController.update)
router.delete("/userDelete/:id", clienteController.destroy)

export default router;