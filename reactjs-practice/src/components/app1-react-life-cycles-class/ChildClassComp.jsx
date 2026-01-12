import React, { Component } from 'react'
import ImageClassComp from './ImageClassComp';

export default class ChildClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("constructor method called...!!!      ->  Child Class Comp");
    }
    static getDerivedStateFromProps = () => {
        console.log("getDerivedStateFromProps method called...!!!      ->  Child Class Comp");

        return null;
    }
    componentDidMount = () => {
        console.log("componentDidMount method called...!!!      ->  Child Class Comp");
    }
    shouldComponentUpdate = () => {
        console.log("shouldComponentUpdate method called...!!!      ->  Child Class Comp");

        return true;
    }
    getSnapshotBeforeUpdate = () => {
        console.log("getSnapshotBeforeUpdate method called...!!!      ->  Child Class Comp");
    }
    componentDidUpdate = () => {
        console.log("componentDidUpdate method called...!!!      ->  Child Class Comp");
    }
  render() {
    console.log("render method called...!!!      ->  Child Class Comp");
    console.log("props : ",this.props)
    return (
      <div>
        <h2>Welcome to Child Component : {this.props.count}</h2>
        {this.props.count === 0 && <ImageClassComp/>}
      </div>
    )
  }
}
