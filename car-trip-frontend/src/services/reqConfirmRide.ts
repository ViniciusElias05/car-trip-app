import IReqConfirm from "../interfaces/IReqConfirm";
import axios from "axios";

export async function reqConfirmRide(data: IReqConfirm) {
    const response = await axios.patch('http://localhost:8080/ride/confirm', {...data});
    return response.data;
}