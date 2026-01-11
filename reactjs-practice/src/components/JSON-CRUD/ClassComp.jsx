import axios from 'axios';
import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                fname : "",
                lname : "",
                state : "",
                gender : "",
                dob : "",
                areasOfInterest : []
            },
            users : [],
            isEditIndex : null
        }
    }
    handleChange = (e) =>{
        const newUser = {...this.state.user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            } else {
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest
        } else {
            newUser[e.target.name] = e.target.value;
        }
        this.setState({user:newUser});
    }
    handleClearFormValues = () => {
        this.setState({user : {
            fname: "",
            lname: "",
            state: "",
            gender: "",
            dob: "",
            areasOfInterest: []
        }})
    }
    handleAddUser = async() => {
        await axios.post("http://localhost:3001/users",this.state.user);
        this.handleClearFormValues();
        this.componentDidMount();
    }
    handleUpdateUser = async() => {
        await axios.put("http://localhost:3001/users/"+this.state.user.id, this.state.user);
        this.handleClearFormValues();
        this.setState({isEditIndex: null});
        this.componentDidMount();
    }
    handleEdit = (usr,index) => {
        this.setState({user:usr,isEditIndex:index});
    }
    handleDelete = async(usr,index) => {
        await axios.delete("http://localhost:3001/users/"+usr.id);
        this.componentDidMount();
    }
    componentDidMount = () => {
        axios.get("http://localhost:3001/users").then((res)=>{
            this.setState({users:res.data});
        })
    }
  render() {
    const {users,isEditIndex} = this.state;
    const {fname, lname, state,gender, dob, areasOfInterest} = this.state.user;
    return (
      <div>
        <h2>Class Comp - async form</h2>
        <form>
            <label>FirstName : </label>
            <input type="text" name="fname" value={fname} onChange={this.handleChange}/> <br />
            <label>LastName : </label>
            <input type="text" name="lname" value={lname} onChange={this.handleChange} /> <br />
            <label>State : </label>
            <select name="state" value={state} onChange={this.handleChange}>
                <option value="">-- select state --</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="TS">Telangana</option>
                <option value="KA">Karnataka</option>
                <option value="MH">Maharashtra</option>
            </select> <br />
            <label>Gender : </label>
            <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={this.handleChange}/> Male
            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={this.handleChange}/> Female
            <input type="radio" name="gender" value="others" checked={gender === "others"} onChange={this.handleChange}/> Others <br />
            <label>DOB : </label>
            <input type="date" name="dob" value={dob} onChange={this.handleChange}/> <br />
            <label>Areas of Interest : </label> <br />
            <input type="checkbox" name="areasOfInterest" value="sports" onChange={this.handleChange} checked={areasOfInterest.includes("sports")}/> Sports
            <input type="checkbox" name="areasOfInterest" value="music" onChange={this.handleChange} checked={areasOfInterest.includes("music")}/> Music
            <input type="checkbox" name="areasOfInterest" value="travel" onChange={this.handleChange} checked={areasOfInterest.includes("travel")}/> Travel
            <input type="checkbox" name="areasOfInterest" value="movies" onChange={this.handleChange} checked={areasOfInterest.includes("movies")}/> Movies
            <br />

            {
              isEditIndex === null ? <button type="button" onClick={this.handleAddUser}>Add Users</button>
              : <button type="button" onClick={this.handleUpdateUser}>Update Users</button>
            }
        </form> <br /><br />            

        <table border={1}>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>State</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Areas Of Interest</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usr,index)=>(
                        <tr key={index}>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.state}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.dob}</td>
                            <td>{usr.areasOfInterest.join(", ")}</td>
                            <td><button type="button" onClick={()=>this.handleEdit(usr,index)}>Edit</button></td>
                            <td><button type="button" onClick={()=>this.handleDelete(usr,index)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}
