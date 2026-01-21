import React, { useContext } from 'react'
import { UseContext } from './Context'

const HoverCounterContext = () => {
   const {counter,handleIncrement,handleDecrement} =  useContext(UseContext);
  
   return (
    <div>
       <p>counter - {counter}</p>
       <button type="button" onMouseOver={handleIncrement} style={{marginRight:"10px"}}>Inc</button>
       <button type="button" onMouseOver={handleDecrement}>Dec</button>
    </div>
  )
}

export default HoverCounterContext