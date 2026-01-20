import React from 'react'
import HocFunc from './HocFunc'

const HoverCounterHOC = (props) => {
    const {counter, handleIncrement, handleDecrement} = props;;
  return (
    <div>
        <h2>Welcome to Hover counter func - HOC</h2>
        <p>Counter - {counter}</p>
        <button type="button" style={{marginRight : "10px"}} onMouseOver={handleIncrement}>Inc</button>
        <button type="button" onMouseOver={handleDecrement}>Dec</button>
    </div>
  )
}

export default HocFunc(HoverCounterHOC)