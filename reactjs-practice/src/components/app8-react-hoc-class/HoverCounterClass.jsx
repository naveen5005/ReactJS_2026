import React, { Component } from 'react'
import withHOCClass from './HOCClass'

class HoverCounterClass extends Component {
  render() {
    const {counter,handleIncrement,handleDecrement} = this.props
    return (
      <div>
        <h2>Welcome to Class component Hover - HOC</h2>
        <p>Counter - {counter}</p>
        <button type="button" style={{marginRight : "10px"}} onMouseOver={handleIncrement}>Inc</button>
        <button type="button" onMouseOver={handleDecrement}>Dec</button>
      </div>
    )
  }
}

export default withHOCClass(HoverCounterClass);
