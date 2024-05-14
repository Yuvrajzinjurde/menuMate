import { config } from "dotenv"
import { z } from "zod"
export const envValidator = z.object({
    PORT: z.coerce.number(),
    MONGO_URI: z.string()

})

export const validateEnv = () =>{
try{
    config();
    envValidator.parse(process.env);
}catch(e){
    throw({
        message : "ENV NOT CONFIGURED CORRECTLY",
        error : e
    });
}
}

export default {
    validateEnv
}