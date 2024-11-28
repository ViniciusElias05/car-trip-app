import React, { useState, FunctionComponent, Dispatch, SetStateAction, useContext } from "react";

import IForm from "../../interfaces/IForm";

import Label from "../atoms/Label";
import IRidesOptions from "../../interfaces/IRidesOptions";
import { handleOnclick } from "../../services/handleOnclick";
import { RidesContext } from "../../context/RidesContext";

const Form = () => {
    const {setRidesOptions, ridesOptions, dataForm, setDataForm} = useContext(RidesContext);
    return (
        <form className="flex p-3 justify-around mx-7" method="POST">
            <div className="flex flex-col">
                <Label>Id: </Label>
                {/* <Input value={dataForm?.customer_id} setValue={setDataForm}/> */}
                <input className="p-1 pl-2 rounded-xl border-2 border-solid
                    border-gray-500 w-72 bg-transparent focus:border-blue-500 outline-none" 
                    value={dataForm?.customer_id} 
                    onChange={ e => setDataForm((prev) =>({...prev, customer_id: e.target.value}))}/>
            </div>
            <div className="flex flex-col">
                <Label>Origem: </Label>
                <input className="p-1 pl-2 rounded-xl border-2 border-solid
                    border-gray-500 w-72 bg-transparent focus:border-blue-500 outline-none" 
                    value={dataForm?.origin} 
                    onChange={ e => setDataForm((prev) =>({...prev, origin: e.target.value}))}/>
            </div>
            <div className="flex flex-col">
                <Label>Destino: </Label>
                <input className="p-1 pl-2 rounded-xl border-2 border-solid
                    border-gray-500 w-72 bg-transparent focus:border-blue-500 outline-none" 
                    value={dataForm?.destination} 
                    onChange={ e => setDataForm((prev) =>({...prev, destination: e.target.value}))}/>
            </div>
            <button className="bg-green-500 px-6 p-2  m-1 rounded-xl shadow
             font-semibold text-lg text-white hover:bg-green-400" 
             onClick={() => handleOnclick(dataForm, setRidesOptions)} type="button">
                Buscar
            </button>
        </form>
    );
}

export default Form;