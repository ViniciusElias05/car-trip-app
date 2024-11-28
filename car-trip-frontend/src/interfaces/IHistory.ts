
interface IRide{
    id: number
    date: Date
    origin: string
    destination: string
    distance: string
    driver: {
        id: number
        name: string
    }
    value: number
}
export default interface IHistory {
    customer_id: string
    rides: IRide[]
}