import React, { useState } from 'react'

const ReusableCounter = ({render}) => {
    const [counter,setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter+1);
    };
    const handleDecrement = () => {
        setCounter(counter-1);
    };
  return (
    <div>{render(counter,handleIncrement,handleDecrement)}</div>
  )
}

export default ReusableCounter