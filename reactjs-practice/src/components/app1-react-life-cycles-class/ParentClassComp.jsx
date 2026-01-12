import React, { Component } from 'react'
import ChildClassComp from './ChildClassComp';

export default class ParentClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
      console.log("constructor method called....!!!     ->  Parent Class Comp");
    }
    static getDerivedStateFromProps = () => {
        console.log("getDerivedStateFromProps method called....!!!     ->  Parent Class Comp");
        return null;
    }
    componentDidMount = () => {
        console.log("componentDidMount method called....!!!     ->  Parent Class Comp");
    }
    handleCount = () => {
        this.setState({counter: this.state.counter+20});
    }
  render() {
    console.log("render method called....!!!     ->  Parent Class Comp");
    return (
      <div>
        <h2>Welcome to the Parent Class Component</h2>
        <button type="button" onClick={this.handleCount}>Click Me</button>
        <ChildClassComp count = {this.state.counter}/>
      </div>
    )
  }
}
