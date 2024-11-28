import { PrismaClient } from "@prisma/client";


export default class DriverController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findById(id: number) {
        try {
            return await this.prisma.driver.findUnique({where: {id:id}});
            
        } catch(e) {
            console.log(e);
        }
    }

    async findForMinKm(km: number){
        try{
            const drivers = await this.prisma.driver.findMany({where: { minkm: { lte: km }},
                include: {
                    review: {
                        select: {
                            rating: true,
                            comment: true
                        }
                    }
                }
            });
            
            return drivers.map( driver=>{
                const {id, name, description, vehicle, review} = driver;
                const value = Number((driver.fare * km).toFixed(2));
                return {id, name, description, vehicle, review, value}
        })

        } catch (e){
            console.log(e);
        }
    }
}
