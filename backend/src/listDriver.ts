import { IDriver } from "./Interfaces/IDriver";
const drivers = require("./drivers.json")
export function listDriver(meters: number) {
    const km = meters/1000;
    let listDrivers = drivers.filter((driver: IDriver) => driver.minkm <= km)
    return listDrivers.map((driver: IDriver) =>{
        const {id, name, description, vehicle, review} = driver;
        return {
            id,
            name,
            description,
            vehicle,
            review,
            value: (driver.fare * km).toFixed(2)
        }
    })
}
