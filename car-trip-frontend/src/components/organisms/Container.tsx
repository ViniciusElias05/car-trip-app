import { FunctionComponent, ReactNode, useContext } from "react";
import Card from "../molecules/Card";
import Maps from "../molecules/Maps";
import { IDriver } from "../../interfaces/IRidesOptions";
import { RidesContext } from "../../context/RidesContext";


const Container = () => {
    const {ridesOptions} = useContext(RidesContext)
    const optionsDriver = ridesOptions?.options || [];
    return (
        <div className="grid grid-cols-5 gap-2 mx-10 h-96 border-4 border-indigo-800
        rounded shadow-md">
           <Maps />
            <div className="border col-span-2">
            {optionsDriver.map((driver: IDriver) => {
                return <Card key={driver.id} driver={driver}/>
                })}

                
            </div>
            
        </div>
    );
}

export default Container;