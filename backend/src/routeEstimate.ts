import {Request, Response} from "express";
import { validate } from "./validate";
import { getRoute } from "./getRoute";
import DriverController from "./Controllers/DriverController";

export const routeEstimate = async(req:Request, res:Response) => {
    const body = req.body;
    const validated = validate(body);
    if(validated.success){
        const routeResponse = await getRoute(body.origin, body.destination);
        const drivers: DriverController = new DriverController();
        const km = routeResponse.routes[0].distanceMeters / 1000;
        const response = {
            origin: routeResponse.routes[0].legs[0].startLocation.latLng,
            destination: routeResponse.routes[0].legs[0].endLocation.latLng,
            distance: km,
            duration: routeResponse.routes[0].duration,
            options: await drivers.findForMinKm(km),
            routeResponse: routeResponse
        };
        res.statusCode = validated.status;
        res.json(response);

    }else{
        res.statusCode = validated.status;
        res.json(validated.error);
    }
}