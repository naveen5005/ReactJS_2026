import React, { useState } from 'react'

const HocFunc = (OriginalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter+1);
    }
    const handleDecrement = () => {
        setCounter(counter-1);
    }
    return(
        <OriginalComponent 
            counter = {counter}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
        />
    )
  }
  return NewComponent
}

export default HocFunc
