import React, { Component } from 'react'

export default class ClassCrud01 extends Component {
    constructor(props) {
        super(props)

        this.state = {
         user: {
            fname: "",
            lname: ""
         },
         users: [
            {
            fname: "naveen",
            lname: "Kumar"
            },
            {
            fname: "Kiran",
            lname: "Kumar"
            }
        ],
        isEdit : null
        }
    }
  handleChange = (e) => {
    const newUser = {...this.state.user};
    newUser[e.target.name] = e.target.value;
    this.setState({user: newUser});
  }  
  addUser = (e) => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({users: newUsers});
    this.clearValues();
  }
  handleDelete = (user, index) => {
    const newUsers = [...this.state.users];
    newUsers.splice(index, 1);
    this.setState({users: newUsers});
  }
  editUser = (usr, index) => {
    this.setState({user: usr, isEdit: index})
  }
  updateUser = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.isEdit] = this.state.user;
    this.setState({users: newUsers, isEdit: null});
    this.clearValues();
  }
  clearValues = () => {
    const clearUserValues = {
        fname: "",
        lname: ""
    }
    this.setState({
        user: clearUserValues
    })
  }
  render() {
    const {fname, lname} = this.state.user;
    const {users,isEdit} = this.state;
    return (
      <div>
        <h1>Class Crud 01 - text</h1>
        <form>
            <label>First Name: </label>
            <input type="text" name="fname" value={fname} onChange={this.handleChange}/> <br />
            <label>Last Name: </label>
            <input type="text" name="lname" value={lname} onChange={this.handleChange}/> <br />

            { isEdit == null ? <button type="button" onClick={this.addUser}>Add</button>
             : <button type="button" onClick={this.updateUser}>Update</button> }
        </form> <br />
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button type="button" onClick={()=>this.editUser(user,index)}>Edit</button></td>
                        <td><button type="button" onClick={()=>this.handleDelete(user,index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>    
      </div>
    )
  }
}
