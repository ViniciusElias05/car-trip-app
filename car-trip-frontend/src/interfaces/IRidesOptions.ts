export interface IDriver {
    id: number, 
    name: string,
    description: string,
    vehicle: string,
    review?: {
        rating: number,
        comment: string
    },
    value: number
}

interface Coord {
    latitude: number,
    longitude: number
}

export default interface IRidesOptions{
    origin?: Coord,
    destination?: Coord,
    distance?: number,
    duration?: string,
    options?: IDriver[],
    routeResponse?: Object
}