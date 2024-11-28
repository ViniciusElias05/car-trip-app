import { Router} from "express";
import { routeEstimate } from "./routeEstimate";
import { rideConfirm } from "./rideConfirm";
import { rideSearch } from "./rideSearch";

export const router = Router();

router.post('/ride/estimate', routeEstimate);
router.patch('/ride/confirm', rideConfirm);
router.get('/ride/:customer_id', rideSearch);
router.get('/ride/', (req, res)=>{
    res.statusCode = 404,
        res.json({
            "error_code": "NO_RIDES_FOUND",
            "error_description": "Nenhum registro encontrado"
        })
});

