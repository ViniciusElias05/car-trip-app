import IForm from "../interfaces/IForm";
import IReqConfirm from "../interfaces/IReqConfirm";
import IRidesOptions, { IDriver } from "../interfaces/IRidesOptions";
import { reqConfirmRide } from "./reqConfirmRide";

export async function confirmRide(dataForm: IForm | null,
     ridesOptions: IRidesOptions | null, driver: IDriver,
     setOpen: React.Dispatch<React.SetStateAction<boolean>>, setMessage:React.Dispatch<React.SetStateAction<string>>
    ) {
    const reqData:IReqConfirm = {
        customer_id: dataForm?.customer_id,
        origin: dataForm?.origin,
        destination: dataForm?.destination,
        distance: ridesOptions?.distance,
        duration: ridesOptions?.duration,
        driver: {
            id: driver.id,
            name: driver.name
        },
        value: driver.value
    }
     await reqConfirmRide(reqData).then((e) =>{
         if(e.success){
            setMessage("Viagem Realizada com Sucesso!")
            setOpen(true);
       }
     }
     );
     return;

}