import { PrismaClient, Rides } from "@prisma/client";
import IDataRide from "../Interfaces/IDataRide";



export default class RideController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: IDataRide){
        try{
            await this.prisma.rides.create( {
                data:{
                    ...data,
                    date: new Date(),
                    driver: {
                        connect: { id: data.driver.id}
                    },
                }   
            })
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    async findById(customer_id: string, driver_id?: number){
        try{
            if(!driver_id)
                return await this.prisma.rides.findMany({ where: { customer_id: customer_id },
                    select: {
                        id: true,
                        date: true,
                        origin: true,
                        destination: true,
                        distance: true,
                        driver: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        value: true
                    }, orderBy:{
                        date: 'desc'
                    }
             })
            else
                return await this.prisma.rides.findMany({ where: { customer_id: customer_id, driverId: driver_id },
                    select: {
                        id: true,
                        date: true,
                        origin: true,
                        destination: true,
                        distance: true,
                        driver: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        value: true
                    }, orderBy:{
                        date: 'desc'
                    }
                })

        } catch (e){
            return e;
        }
    }
}

