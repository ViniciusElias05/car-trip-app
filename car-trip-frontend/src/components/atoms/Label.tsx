import { FunctionComponent, ReactNode } from "react";
interface LabelProps {
    children: ReactNode;
}
const Label: FunctionComponent<LabelProps> = ({children})=> {
    return (
        <label className="m-1 mb-2 font-semibold">{children}</label>
    );
}

export default Label;