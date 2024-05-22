// import React from 'react'

import  { Dispatch, SetStateAction } from "react";

// type PropsType={
//     heading: string;
//     count?: number;
//     // func1:(a:string)=>void;
//     children:ReactNode;
// }

type InputValueType = string|number;

export const Box = <T extends InputValueType >({ 
    label,
    value,
    setter
}:{
    label: string,
    value: T,
    setter: Dispatch<SetStateAction<T>>
}) => {
    // func1("bkaskas");
    return (
        <form >
            <label htmlFor=""> {label}</label>
            <input type="text"  value={value}  onChange={(e)=>setter(e.target.value as T)}/>
            <button>Submit</button>
        </form>
    )
}
export default Box