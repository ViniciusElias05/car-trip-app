import { IRide } from "./Interfaces/IRide";

export const validate = (body: IRide) =>{
    if(body.origin && body.destination && body.customer_id && body.destination != body.origin){
            return {success: true, status:200};
    }

    return {success: false,
            status: 400,
            error: {
                    "error_code": "INVALID_DATA",
                    "error_description": "Os dados fornecidos no corpo da requisição são inválidos"
            }
    };

}