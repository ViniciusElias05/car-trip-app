import{ Request, Response } from 'express';
import RideController from './Controllers/RideController';
import DriverController from './Controllers/DriverController';
import { validate } from './validate';

const driverController = new DriverController();
const rideController = new RideController();

export const rideConfirm = async (req: Request, res: Response) =>{
    const body = req.body;
   const exists = await driverExists(body.driver.id)
    const vKm = await validateKm(body.driver.id, body.distance)
    const val = validate(body)

    if(!val.success){
        res.statusCode = val.status;
        res.json(val.error)
        return;
    }
    if(!exists.success){
        res.statusCode = exists.status
        res.json(exists)
        return;
    }
    if(!vKm.success){
        res.statusCode = vKm.status
        res.json(vKm.error)
        return;
    }
    try{
        if(await rideController.create({...req.body})){
            res.statusCode = 200;
            res.json({success: true})
        }

    } catch (e) {
        res.statusCode = 500;
        res.json(e)
    }
}

async function driverExists(id: number) {
    try {
         if(await driverController.findById(id)){
            return {
                success: true,
                status: 200
            }
         } else {
            return {
                success: false,
                status: 404,
                error: {
                        "error_code": "DRIVER_NOT_FOUND",
                        "error_description": "Motorista não encontrado"
                }
            };
        }
    } catch(e) {
        return {
            success: false,
            status: 500,
            error: e
         }
    }
}

async function validateKm(id:number, km: number) {
    try{
        const driver = await driverController.findById(id);
        const min = (driver?.minkm == undefined ? 0 : driver.minkm);
        if(min <= km){
            return {
                success: true,
                status: 200
            }
        } else {
            return {
                success: false,
                status: 406,
                error: {
                        "error_code": "INVALID_DISTANCE",
                        "error_description": "Quilometragem inválida para o motorista"
                }
            };

        }
    } catch (e){
        return {
            success: false,
            status: 500,
            error: e
         }
    }
}
