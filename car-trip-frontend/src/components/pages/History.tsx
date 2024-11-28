import { useState } from "react";
import Header from "../organisms/Header";
import Label from "../atoms/Label";


export default function History() {
    const [customer_id, setCustomer_id] = useState<string>("");
    const [driver_id, setDriver_id] = useState<string>("");
    
    return (
    <>
      <Header/>
      <div className="flex p-3 justify-around mx-7">
        <div className="flex flex-col">
             <Label>Id Usuário: </Label>
        <input className="p-1 pl-2 rounded-xl border-2 border-solid
                        border-gray-500 w-72 bg-transparent focus:border-blue-500 outline-none" 
                        value={customer_id} 
                        onChange={(e) => setCustomer_id(e.target.value)}/>
            
        </div>
        <div className="flex flex-col">
        <Label>Id motorista: </Label>
            <input className="p-1 pl-2 rounded-xl border-2 border-solid
                        border-gray-500 w-72 bg-transparent focus:border-blue-500 outline-none" 
                        value={driver_id} 
                        onChange={(e) => setDriver_id(e.target.value)}/>
        </div>
        <button className="bg-green-500 px-6 p-2  m-1 rounded-xl shadow
             font-semibold text-lg text-white hover:bg-green-400"  type="button">
                Buscar
            </button>
      </div>
      </>
    )
  }