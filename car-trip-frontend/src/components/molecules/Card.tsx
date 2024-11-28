import { RidesContext } from '../../context/RidesContext';
import { IDriver } from '../../interfaces/IRidesOptions';
import { confirmRide } from '../../services/confirmRide';
import React, { FunctionComponent, useContext } from 'react';

type CardProps = {
    driver: IDriver
}
const Card: FunctionComponent<CardProps> = ({driver})=>{
    const {dataForm, ridesOptions, setOpen, setMessage} = useContext(RidesContext);

    return(<div className="border-b border-gray-800 bg-red-300">
    <div className="flex p-1 justify-between ">
        <div className="m-1">
            <div className="flex gap-2">
                <h6 className="font-bold">{driver.name}</h6>
                <div className="rating">
                    <span className="tooltip-icon rounded-3xl bg-slate-200 border border-black p-1">{driver.review?.rating}/5</span>
                    <div className="tooltip">
                        {driver.review?.comment}
                    </div>
                </div>
            </div>
            <p className="text-xs text-slate-400">{driver.vehicle}</p>
        </div>
            <h6 className="font-bold">R$ {driver.value}</h6>
    </div>
        <p className="text-sm ">{driver.description}
        </p> 
        <button className="bg-green-500 px-6 rounded-xl shadow
             font-semibold text-md text-white hover:bg-green-400" 
             onClick={()=>confirmRide(dataForm, ridesOptions, driver, setOpen, setMessage)}
             type="button">
                Selecionar
            </button>
</div>

)}

export default Card;