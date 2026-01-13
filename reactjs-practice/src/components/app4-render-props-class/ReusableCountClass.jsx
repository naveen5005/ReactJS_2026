import React, { Component } from 'react'

export default class ReusableCountClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0,
      }
    }
    handleIncrement = () => {
        this.setState({counter: this.state.counter+1});
    }
    handlDecrement = () => {
        if(this.state.counter>0){
            this.setState({counter: this.state.counter-1});
        }
    }
  render() {
    const{render} = this.props;
    return (
      <div>{render(this.state.counter,this.handleIncrement,this.handlDecrement)}</div>
    )
  }
}
