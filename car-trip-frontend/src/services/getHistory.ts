import axios from "axios";


export async function getHistory(customer_id: string, driver_id?: string){
    const result = await axios.get(`http://localhost:8080/ride/${customer_id}?driver_id=${driver_id}`);
    console.log(result)
}