import React, { Component } from 'react'

export default class ClickCountClass extends Component {
  render() {
    const {counter,handleIncrement,handleDecrement} = this.props
    return (
      <div>
        <h2>Class Comp Click - {counter}</h2>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
      </div>
    )
  }
}
