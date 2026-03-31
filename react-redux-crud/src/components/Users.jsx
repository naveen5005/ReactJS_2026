import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { handleAddUserAction, handleDeleteUserAction, handleUpdateUserAction } from '../Store/action';

const Users = () => {
 const [user,setUser] = useState({
  fname:"",
  lname:""
 });
 const [index,setIndex] = useState(null);
 const storeDetails= useSelector((state)=>{
  return state.users;
 });
 const dispatch = useDispatch();

 const handleChange = (e) => {
  const {name,value} = e.target;
  setUser((prev)=> ({
    ...prev,
    [name]: value
  }))
 }
 const handleAddUser = () =>{
  dispatch(handleAddUserAction(user));
  handleClearForm();
 }
 const handleUpdateUser = () => {
  dispatch(handleUpdateUserAction({...user,index}));
  setIndex(null)
  handleClearForm();
 }
 const handleEdit = (usr,index) => {
  setIndex(index);
  setUser(usr);
 }
 const handleDelete = (usr,index) => {
  dispatch(handleDeleteUserAction({...usr,index}))
 }
 const handleClearForm = () => {
  setUser({
  fname:"",
  lname:""
 });
 }
  return (
    <div>
      <form>
        <label>First Name : </label>
        <input type="text" name="fname" id="fname" value={user.fname} onChange={handleChange}/> <br></br>
        <label>Last Name : </label>
        <input type="text" name="lname" id="lname" value={user.lname} onChange={handleChange}/> <br />
        {index === null ? <button type="button" onClick={handleAddUser}>Add User</button> :
        <button type="button" onClick={handleUpdateUser}>Update User</button>   
        }
      </form> <br />
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            storeDetails.map((usr,i)=>(
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>
                  <button type="button" onClick={()=>handleEdit(usr,i)}>edit</button>
                </td>
                <td>
                  <button type="button" onClick={()=>handleDelete(usr,i)}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users