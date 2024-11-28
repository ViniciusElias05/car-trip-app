import {Request, Response} from "express";
import RideController from "./Controllers/RideController";
import { Rides } from "@prisma/client";
import DriverController from "./Controllers/DriverController";

export const rideSearch = async(req: Request, res: Response) => {
    const customer_id = req.params.customer_id;
    const driver_id = Number(req.query.driver_id);
    const rideController = new RideController();
    const driverController = new DriverController();
    
    try{
            if(!(await driverController.findById(driver_id)) && driver_id){
                res.statusCode = 400,
                res.json({
                    "error_code": "INVALID_DRIVER",
                    "error_description": "Motorista invalido"
                })
                return;
            }

            const rides: Rides[] = await rideController.findById(customer_id, driver_id) as Rides[];
            if(rides.length > 0){
                res.statusCode = 200;
                res.json({customer_id, rides})
                return;
            }
            
            res.statusCode = 404,
            res.json({
                "error_code": "NO_RIDES_FOUND",
                "error_description": "Nenhum registro encontrado"
            })
    } catch(e) {
        res.statusCode = 500;
        res.json({err: e})
    }
}