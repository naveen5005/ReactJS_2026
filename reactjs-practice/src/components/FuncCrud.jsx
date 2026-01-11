import React, { useState } from 'react'

const FuncCrud = () => {
    const [user,setUser] = useState({
        fname : '',
        lname : '',
        gender : '',
        state : '',
        areasOfInterest : []
    });
    const [users,setUsers] = useState([
        {
            fname : "Naveen",
            lname : "Bellam",
            gender : "Male",
            state : "AP",
            areasOfInterest : ["HTML","CSS"]
        }
    ]);
    const [isEdit, setIsEdit] = useState(null);

    const handleChange = (e) => {
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            }else{
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                if(index !== -1){
                    updatedAreasOfInterest.splice(index,1);
                }
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const clearFormValues = () => {
        setUser({
            fname : "",
            lname : "",
            gender : "",
            state: "",
            areasOfInterest :[]
        })
    }
    const handleAddUser = () => {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
        clearFormValues();
    }
    const handleEdit = (user,index) => {
        setUser(user);
        setIsEdit(index);
    }
    const handleUpdateUser = () => {
        const newUsers = [...users];
        newUsers[isEdit] = user;
        setUsers(newUsers);
        setIsEdit(null);
        clearFormValues();
    }
    const handleDelete = (user,index) => {
        const newUsers = [...users];
        newUsers.splice(index,1);
        setUsers(newUsers);
    }
  return (
    <div>
        <h2>Functional component</h2>
        <form>
            <label>FirstName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />
            <label>LastName : </label>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} /> <br />
            <label>Gender : </label>
            <input type="radio" name="gender" value={"Male"} checked = {user.gender === "Male"} onChange={handleChange} /> Male 
            <input type="radio" name="gender" value={"Female"} checked = {user.gender === "Female"} onChange={handleChange} /> Female 
            <input type="radio" name="gender" value={"Others"} checked = {user.gender === "Others"} onChange={handleChange} /> Others <br />
            <label>State : </label>
            <select name="state" value={user.state} onChange={handleChange}>
                <option value="">--select--</option>
                <option value="AP">AP</option>
                <option value="KA">KA</option>
                <option value="TS">TS</option>    
            </select>   <br />

            <label>Areas Of Interest : </label>   <br />
            <input type="checkbox" name="areasOfInterest" value={"HTML"} checked = {user.areasOfInterest.includes("HTML")} onChange={handleChange}/> HTML
            <input type="checkbox" name="areasOfInterest" value={"CSS"} checked = {user.areasOfInterest.includes("CSS")} onChange={handleChange}/> CSS
            <input type="checkbox" name="areasOfInterest" value={"JS"} checked = {user.areasOfInterest.includes("JS")} onChange={handleChange}/> JS
            <input type="checkbox" name="areasOfInterest" value={"REACTJS"} checked = {user.areasOfInterest.includes("REACTJS")} onChange={handleChange}/> REACTJS <br />

            {isEdit === null ? <button type="button" onClick={handleAddUser}>Add User</button>
            : <button type="button" onClick={handleUpdateUser}>Update User</button>} 
        </form> <br />
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
                    users.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.gender}</td>
                            <td>{user.state}</td>
                            <td>{user.areasOfInterest.join(", ")}</td>
                            <td><button type="button" onClick={()=>handleEdit(user,index)}>edit</button></td>
                            <td><button type="button" onClick={()=>handleDelete(user,index)}>delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default FuncCrud