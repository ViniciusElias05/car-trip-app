import { RidesContext } from "../../context/RidesContext";
import React, { FunctionComponent, MouseEventHandler, useContext, useState } from "react";

interface AlertProps {
    message: string
}

const Alert: FunctionComponent<AlertProps> = ({ message})=> {
    const{isOpen, setOpen} = useContext(RidesContext);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-transparentAlert z-[4000]">
      <div className="fixed top-1/2 left-1/2 translate-x-[-50%] w-96 
      translate-y-[-50%] bg-white p-8  rounded-md flex flex-col gap-8">
        <p>{message}</p>
        <button onClick={()=> setOpen(!isOpen)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full self-end">Fechar</button>
      </div>
    </div>
  );
}

export default Alert;
