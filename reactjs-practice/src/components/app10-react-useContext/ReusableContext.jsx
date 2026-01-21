import React, { useState } from 'react'
import { UseContext } from './Context'
import ClickCounterContext from './ClickCounterContext';
import HoverCounterContext from './HoverCounterContext';

const ReusableContext = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter+1);
    }
    const handleDecrement = () => {
        if(counter>0){
            setCounter(counter-1);
        }
    }
  return (
    <div>
        <UseContext.Provider value={{counter,handleIncrement,handleDecrement}}>
            <ClickCounterContext/>
            <HoverCounterContext/>
        </UseContext.Provider>
    </div>
  )
}

export default ReusableContext