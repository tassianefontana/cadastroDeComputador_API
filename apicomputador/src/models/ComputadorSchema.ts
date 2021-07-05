import {model, Schema} from "mongoose";

const computadorSchema = new Schema(
    {
        dono:{
            type: String,
            required:[true, "O campo nome é obrigatório"]
        },
        placaMae:{
            type:String,
            required:[true, "O campo ISBN é obrigatório"]
            
        },
        processador:{
            type: String,
            required:[true, "O campo nome é obrigatório"]
        },
        memoria:{
            type: Number,
            required:[true, "O campo preço é obrigatório"]
        },
        armazenamento:{
            type: String,
            required:[true, "O campo nome é obrigatório"]
        },
        fonte:{
            type: String,
            required:[true, "O campo nome é obrigatório"]
        },
        
    },
    {

    timestamps: true
    
    }
)

export default model("computadores", computadorSchema)