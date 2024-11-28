import IForm from "../interfaces/IForm"
import IRidesOptions from "../interfaces/IRidesOptions";
import { searchRideEstimate } from "./searchRideEstimate"

export const handleOnclick = async (data:IForm | null, setRidesOptions: React.Dispatch<React.SetStateAction<IRidesOptions|null>>) =>{
    setRidesOptions(await searchRideEstimate(data))
}