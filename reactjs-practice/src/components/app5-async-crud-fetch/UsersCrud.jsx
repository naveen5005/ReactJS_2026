import React, { useEffect, useState } from 'react'

const UsersCrud = () => {
    const [users,setUsers] = useState([]);
    const [isEditIndex, setIsEditIndex] = useState(null);

    const [user,setUser] = useState({
        fname: "",
        lname: "",
        gender: "",
        dob: "",
        state: "",
        areasOfInterest : [],   
    });
    const getUsers = () => {
        fetch("http://localhost:3001/users",{
            method : "GET",
            headers: { 'Content-Type': 'application/json' }
        }).then((res)=> res.json()).then((data)=>{
            setUsers(data);
        })
    }
    const handleChange = (e) => {
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            }else{
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        console.log(user);
        fetch("http://localhost:3001/users",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }).then((res)=>res.json).then((data)=>{
            getUsers();
            clearFormValues();
        })
    }
    const handleDelete = (user) =>{
        fetch("http://localhost:3001/users/"+user.id,{
            method: "DELETE",
            headers: {'Content-Type':'application/json'},
            body: null
        }).then((res)=>res.json()).then((data)=>{
            getUsers();
        })
    }
    const handleEdit = (user) => {
        setUser(user);
        setIsEditIndex(user.id);
    }
    const handleUpdateUser = () => {
        fetch("http://localhost:3001/users/"+user.id,{
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then((res)=>res.json()).then((data)=>{
            getUsers();
            setIsEditIndex(null);
            clearFormValues();
        });
    }
    const clearFormValues = () => {
        setUser({
        fname: "",
        lname: "",
        gender: "",
        dob: "",
        state: "",
        areasOfInterest : [],   
    })
    }
    useEffect(()=>{
      getUsers();
    },[]);
  return (
    <div>
        <h2>Welcome to Users page</h2>
        <form>
            <label>FirstName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />
            <label>LastName : </label>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} /> <br />
            <label>Gender : </label>
            <input type="radio" name="gender" value={"male"} onChange={handleChange} checked = {user.gender === "male"}/> Male
            <input type="radio" name="gender" value={"female"} onChange={handleChange} checked = {user.gender === "female"}/> Female
            <input type="radio" name="gender" value={"others"} onChange={handleChange} checked = {user.gender === "others"}/> Others <br />
            <label>DOB : </label>
            <input type="date" name="dob" value={user.dob} onChange={handleChange} /> <br />
            <label>State : </label>
            <select name="state" value={user.state} onChange={handleChange}>
                <option value="">--select--</option>
                <option value="AP">AP</option>
                <option value="TS">TS</option>
                <option value="MH">MH</option>
                <option value="KA">KA</option>
            </select> <br />
            <label>Areas Of Interest : </label>
            <input type="checkbox" name="areasOfInterest" value={"travel"} onChange={handleChange} checked ={user.areasOfInterest.includes("travel")} /> travel
            <input type="checkbox" name="areasOfInterest" value={"movies"} onChange={handleChange} checked ={user.areasOfInterest.includes("movies")} /> movies
            <input type="checkbox" name="areasOfInterest" value={"music"} onChange={handleChange} checked ={user.areasOfInterest.includes("music")} /> music
            <input type="checkbox" name="areasOfInterest" value={"sports"} onChange={handleChange} checked ={user.areasOfInterest.includes("sports")} /> sports <br />

            {
                isEditIndex === null ? <button type="button" onClick={handleAddUser}>Add User</button>
                : <button type="button" onClick={handleUpdateUser}>Update User</button>
            }
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>State</th>
                    <th>Areas Of Interest</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usr)=>(
                        <tr key={usr.id}>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.dob}</td>
                            <td>{usr.state}</td>
                            <td>{usr.areasOfInterest.join(", ")}</td>
                            <td>
                                <button type="button" onClick={()=>handleEdit(usr)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={()=>handleDelete(usr)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersCrud