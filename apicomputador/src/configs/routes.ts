import {Router} from "express"
import {ComputadorController} from "../controllers/computadoresController"

const router = Router()

const computadorController = new ComputadorController()

router.post("/computador/cadastrar", computadorController.cadastrar)
router.get("/computador/listar", computadorController.listar)
router.delete("/computador/remover/:isbn", computadorController.remover)

 
export{router}