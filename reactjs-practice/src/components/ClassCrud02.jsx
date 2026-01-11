import React, { Component } from 'react'

export default class ClassCrud02 extends Component {
  constructor(props){
    super(props);
    this.state = {
        user : {
            fname : "",
            lname : "",
            gender : "",
            state: "",
            areasOfInterest: []
        },
        users : [],
        isEditIndex : null
    }

  } 
  handleChange = (e) => {
    console.log(e)
    const {name,value,checked} = e.target;
    const newUser = {...this.state.user};
    if(name === "areasOfInterest"){
    if(checked){
      newUser.areasOfInterest.push(value);
    } else{
      const index = newUser.areasOfInterest.indexOf(value);
      if(index !== -1){
        // remove the unchecked value from the array
        newUser.areasOfInterest.splice(index,1);
      }
    }
    }else{
        newUser[name] = value;
    }
    this.setState({user : newUser});
  } 
  addUser = () => {
    console.log(this.state.user)
  }
  render() {
    const {fname, lname, gender, state, areasOfInterest} = this.state.user
    return (
      <>
        <div style={{fontStyle: "italic", fontWeight: "bolder", marginBottom : "15px"}}>ClassCrud02 - text,radio,checkbox,dropdown</div>
        <form>
            <label>First Name : </label>
            <input type="text" name="fname" value={fname} onChange={this.handleChange}/> <br />

            <label>Last Name : </label>
            <input type="text" name="lname" value={lname} onChange={this.handleChange} /> <br />

            <label>Gender : </label>
            <select name="gender" value={gender} onChange={this.handleChange}>
                <option value="">-- select the gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select> <br />

            <label>State : </label>
            <input type="radio" name="state" value={"AP"} checked = {state === "AP"} onChange={this.handleChange}/> AP
            <input type="radio" name="state" value={"TS"} checked = {state === "TS"} onChange={this.handleChange}/> TS
            <input type="radio" name="state" value={"KA"} checked = {state === "KA"} onChange={this.handleChange}/> KA  <br />

            <label>Areas Of Interest : </label> <br />
            <input type="checkbox" name="areasOfInterest" value="HTML" checked = {areasOfInterest.includes("HTML")} onChange={this.handleChange} /> HTML 
            <input type="checkbox" name="areasOfInterest" value="CSS" checked = {areasOfInterest.includes("CSS")} onChange={this.handleChange} /> CSS 
            <input type="checkbox" name="areasOfInterest" value="JS" checked = {areasOfInterest.includes("JS")} onChange={this.handleChange} /> JS 
            <input type="checkbox" name="areasOfInterest" value="REACTJS" checked = {areasOfInterest.includes("REACTJS")} onChange={this.handleChange} /> REACTJS <br />



            <button type="button" onClick={this.addUser}>Add User</button>
        </form>
      </>
    )
  }
}
