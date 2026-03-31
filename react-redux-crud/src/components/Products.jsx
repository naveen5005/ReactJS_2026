import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddUserAction, handleDeleteUserAction, handleUpdateUserAction } from '../Store/action';

const Products = () => {
    const[user,setUser] = useState({
        fname: "",
        lname: "",
        gender: "",
        state: "",
        areasOfInterest: []
    })
    const[isIndex,setIsIndex] = useState(null);
    const storeDetails = useSelector((state)=>{
        return state.users
    })
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        const {name,value,checked} = e.target;
        if(name === "areasOfInterest"){
            setUser((prev)=>{
                let updatedArr = [...prev.areasOfInterest];
                if(checked){
                    updatedArr.push(value);
                }else{
                    updatedArr = updatedArr.filter((item) => item !== value); 
                }
                return {
                    ...prev,
                    areasOfInterest: updatedArr
                }
            })
        } else{
            setUser((prev)=>({
            ...prev,
            [name] : value
        }))
        }
    }
 const handleAddUser = () =>{
  dispatch(handleAddUserAction(user));
  handleClearForm();
 }
 const handleUpdateUser = () => {
  dispatch(handleUpdateUserAction({...user,isIndex}));
  setIsIndex(null)
  handleClearForm();
 }
 const handleEdit = (usr,index) => {
  setIsIndex(index);
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
            <input type="text" name="fname" id="fname" value={user.fname} onChange={handleChange} /> <br />
            <label>Last Name : </label> 
            <input type="text" name="lname" id="lname" value={user.lname} onChange={handleChange}/> <br />
            <label>Gender : </label>
            <select name="gender" value={user.gender} onChange={handleChange}>
                <option>--select--</option>
                <option value={"Male"}>Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select> <br />
            <label>State : </label>
            <input type="radio" name="state" value={"AP"} checked={user.state === "AP"} onChange={handleChange}/> AP 
            <input type="radio" name="state" value={"TS"} checked={user.state === "TS"} onChange={handleChange}/> TS
            <input type="radio" name="state" value={"KA"} checked={user.state === "KA"} onChange={handleChange}/> KA 
            <input type="radio" name="state" value={"CA"} checked={user.state === "CA"} onChange={handleChange}/> CA <br />
            <label>Areas Of Interest : </label>
            <input type="checkbox" name="areasOfInterest" value={"HTML"} checked={(user.areasOfInterest || []).includes("HTML")}  onChange={handleChange} /> HTML
            <input type="checkbox" name="areasOfInterest" value={"CSS"} checked={(user.areasOfInterest || []).includes("CSS")}  onChange={handleChange} /> CSS
            <input type="checkbox" name="areasOfInterest" value={"JS"} checked={(user.areasOfInterest || []).includes("JS")}  onChange={handleChange} /> JS
            <input type="checkbox" name="areasOfInterest" value={"REACTJS"} checked={(user.areasOfInterest || []).includes("REACTJS")}  onChange={handleChange} /> REACTJS
            <input type="checkbox" name="areasOfInterest" value={"NEXTJS"} checked={(user.areasOfInterest || []).includes("NEXTJS")} onChange={handleChange} /> NEXTJS <br /><br />
            
            {
                isIndex === null ? <button type="button" onClick={handleAddUser}>Add Product</button>
                : <button type="button" onClick={handleUpdateUser}>Update Product</button>
            }
             <br /><br />

            <table border={1}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Areas Of Interest</th>
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
                                <td>{usr.gender}</td>
                                <td>{usr.state}</td>
                                <td>{usr.areasOfInterest.join(", ")}</td>
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
        </form>
    </div>
  )
}

export default Products