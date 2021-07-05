import {Request,Response} from "express"
import ComputadorSchema from "../models/ComputadorSchema"

class ComputadorController{

async cadastrar(request:Request,response:Response){
    const computador = request.body
    const {dono} = request.body
    
    if (await ComputadorSchema.exists({dono})){
        response.status(409).json({msg: "Já existe um proprietário com este nome."})

    } else {

        const novoComputador = await ComputadorSchema.create(request.body)
            response.status(201).json({novoComputador})           
      
    }
}

async listar(request:Request, response:Response){
    response.status(200).json(await ComputadorSchema.find())
}

async remover (request:Request, response:Response){
    const {dono} = request.params
    const livro = await ComputadorSchema.findOneAndDelete({dono})
    response.status(200).json(await ComputadorSchema.findOneAndDelete({livro}))
}


}

export {ComputadorController}