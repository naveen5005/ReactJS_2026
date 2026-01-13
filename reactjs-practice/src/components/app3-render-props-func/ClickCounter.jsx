import React, { useState } from 'react'

const ClickCounter = ({counter,handleIncrement,handleDecrement}) => {
  return (
    <div>
        <h2>Welcome to Click Counter</h2>
        <p>Counter - {counter}</p>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default ClickCounter