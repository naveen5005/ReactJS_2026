import React, { useState } from 'react'

const HoverCounter = ({counter,handleDecrement,handleIncrement}) => {
  return (
    <div>
        <h2>Welcome to Hover Counter</h2>
        <p>counter - {counter}</p>
        <button type="button" onMouseOver={handleIncrement}>Increment</button>
        <button type="button" onMouseOver={handleDecrement}>Decrement</button>
    </div>
  )
}

export default HoverCounter