import React, { useContext, useState } from 'react'
import { context } from './ReusableComp';

const ClickCounter = () => {
    const {count,handleIncrement,handleDecrement} = useContext(context);
  return (
    <div>
        <h1>Click Counter</h1>
        <p>count - {count}</p>
        <button type='button' onClick={handleIncrement}>Inc</button>
        <button type='button' onClick={handleDecrement}>Dec</button>
    </div>
  )
}

export default ClickCounter