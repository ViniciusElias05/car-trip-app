import React, {createContext, ReactNode, useState, useEffect} from 'react';

import IRidesOptions from '../interfaces/IRidesOptions';
import IForm from '../interfaces/IForm';

type RidesContextProps = {
    ridesOptions: IRidesOptions | null
    setRidesOptions: React.Dispatch<React.SetStateAction<IRidesOptions | null>>
    dataForm: IForm | null
    setDataForm: React.Dispatch<React.SetStateAction<IForm | null>>
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

const initialValue = {
    ridesOptions: null,
    setRidesOptions: () => {},
    dataForm: null,
    setDataForm: () => {},
    isOpen: false,
    setOpen: () => {},
    message: "",
    setMessage: () => {}
}

const RidesContext = createContext<RidesContextProps>(initialValue);

const RidesProvider = ({children}: {children: ReactNode}) => {
    const [ridesOptions, setRidesOptions] = useState<IRidesOptions| null>(null);
    const [dataForm, setDataForm] = useState<IForm| null>(null);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    return(
        <RidesContext.Provider value={{ridesOptions, setRidesOptions,
         dataForm, setDataForm, message, setMessage, setOpen, isOpen}}>
           {children}
        </RidesContext.Provider>
    );
}

export {RidesContext, RidesProvider};