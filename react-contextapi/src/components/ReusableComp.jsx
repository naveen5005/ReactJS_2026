import { createContext, useState } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
export const context = createContext();

const ReusableComp = () => {
    const [count,setCount]=useState(0);
    const handleIncrement =() =>{
        setCount((prev)=>prev+1);
    }
    const handleDecrement = () => {
        setCount((prev)=>prev-1);
    }
  return (
    <div>
      <context.Provider value={{count,handleIncrement,handleDecrement}}>
        <ClickCounter/>
        <HoverCounter/>
      </context.Provider>
    </div>
  )
}

export default ReusableComp