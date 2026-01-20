import React, { Component } from 'react'
import withHOCClass from './HOCClass'

class ClickCounterClass extends Component {
  render() {
    const {counter, handleIncrement, handleDecrement} = this.props
    return (
      <div>
        <h2>Welcome to Class Component Click - HOC</h2>
        <p>Counter - {counter}</p>
        <button type="button" style={{ marginRight : "10px"}} onClick={handleIncrement}>Inc</button>
        <button type="button" onClick={handleDecrement}>Dec</button>
      </div>
    )
  }
}

export default withHOCClass(ClickCounterClass);
