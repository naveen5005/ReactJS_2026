import React from 'react'
import HocFunc from './HocFunc'

const ClickCounterHOC = (props) => {
    const {counter, handleIncrement, handleDecrement} = props;
  return (
    <div>
        <h2>Welcome to Click Counter func - HOC</h2>
        <p>Counter - {counter}</p> <br />
        <button type="button" style={{marginRight: "10px"}} onClick={handleIncrement}>Inc</button>
        <button type="button" onClick={handleDecrement}>Dec</button>
    </div>
  )
}

export default HocFunc(ClickCounterHOC)