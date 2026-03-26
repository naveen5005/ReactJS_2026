import React, { useContext, useState } from 'react'
import { context } from './ReusableComp'

const HoverCounter = () => {
    const {count,handleIncrement,handleDecrement} = useContext(context);
  return (
    <div>
        <h1>Hover Counter</h1>
        <p>count - {count}</p>
        <button type="button" onMouseOver={handleIncrement}>Inc</button>
        <button type="button" onMouseOver={handleDecrement}>Dec</button>
    </div>
  )
}

export default HoverCounter