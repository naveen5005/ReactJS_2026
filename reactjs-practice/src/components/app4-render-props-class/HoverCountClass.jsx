import React, { Component } from 'react'

export default class HoverCountClass extends Component {
  render() {
    const {counter,handleIncrement,handleDecrement} = this.props
    return (
      <div>
        <h2>Class Comp Hover - {counter}</h2>
        <button type="button" onMouseOver={handleIncrement}>Increment</button>
        <button type="button" onMouseOver={handleDecrement}>Decrement</button>
      </div>
    )
  }
}
