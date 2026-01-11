import React, { useState } from 'react'

const FuncCrudPrac = () => {
    const [user,setUser] = useState({
        fname : "",
        lname : "",
        state : "",
        dob : "",
        gender : "",
        areasOfInterest : [],
    });
    const [users,setUsers] = useState([]);
    const [isEdit, setIsEdit] = useState(null);

    const handleChange = (e) => {
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            } else {
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
        clearFormValues();
    }
    const handleEditUser = (usr,index) => {
        setIsEdit(index);
        setUser(usr);
    }
    const handleDeleteUser = (usr,index) => {
        const newUsers = [...users];
        newUsers.splice(index,1);
        setUsers(newUsers);
    }
    const clearFormValues = () => {
        setUser({
            fname : "",
            lname : "",
            state : "",
            dob : "",
            gender : "",
            areasOfInterest : []
        });
    }
    const handleUpdateUser = () => {
        const updatedUsers = [...users];
        updatedUsers[isEdit] = user;
        setUsers(updatedUsers);
        setIsEdit(null);
        clearFormValues();
    }
  return (
    <div>
        <h2>CRUD Practice</h2>
        <form>
            {/* FirstName */}
            <label>FirstName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />
            {/* LastName */}
            <label>LastName : </label>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} /> <br />
            {/* State */}
            <label>State : </label>
            <select name="state" value={user.state} onChange={handleChange}>
                <option value="">--select--</option>
                <option value="AP">AP</option>
                <option value="TS">TS</option>
                <option value="KA">KA</option>
            </select> <br />
            {/* DOB  */}
            <label>DOB : </label>
            <input type="date" name="dob" value={user.dob} onChange={handleChange} /> <br />
            {/* Gender */}
            <label>Gender : </label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} checked = {user.gender === "Male"}/> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} checked = {user.gender === "Female"}/> Female 
            <input type="radio" name="gender" value="Others" onChange={handleChange} checked = {user.gender === "Others"}/> Others <br />
            {/* Areas Of Interest */}
            <label>Areas Of Interest : </label>
            <input type="checkbox" name="areasOfInterest" value = 'HTML' onChange={handleChange} checked = {user.areasOfInterest.includes('HTML')}/> HTML
            <input type="checkbox" name="areasOfInterest" value = 'CSS' onChange={handleChange} checked = {user.areasOfInterest.includes('CSS')}/> CSS 
            <input type="checkbox" name="areasOfInterest" value = 'JAVASCRIPT' onChange={handleChange} checked = {user.areasOfInterest.includes('JAVASCRIPT')}/> JAVASCRIPT
            <input type="checkbox" name="areasOfInterest" value = 'REACTJS' onChange={handleChange} checked = {user.areasOfInterest.includes('REACTJS')}/> REACTJS <br />

            {
                isEdit === null ? <button type="button" onClick={handleAddUser}>Add</button> : <button type="button" onClick={handleUpdateUser}>Update</button>
            } <br /><br />

            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>State</th>
                        <th>DOB</th>
                        <th>Gender</th>
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
                                <td>{usr.dob}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.areasOfInterest.join(", ")}</td>
                                <td><button type="button" onClick={()=>handleEditUser(usr,index)}>Edit</button></td>
                                <td><button type="button" onClick={()=>handleDeleteUser(usr,index)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </form>
    </div>
  )
}

export default FuncCrudPrac