import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FuncComp = () => {
    const [user,setUser] = useState({
        fname : "",
        lname : "",
        state : "",
        gender : "",
        dob : "",
        areasOfInterest : [], 
    });
    const [users,setUsers] = useState([]);
    const [isEditIndex,setIsEditIndex] = useState(null);

    const handleChange = (e) => {
      const newUser = {...user};
      if(e.target.name === "areasOfInterest"){
        const updatedAreasOfInterest = [...newUser.areasOfInterest]
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
    const clearFormValues = () => {
      setUser({
        fname : "",
        lname : "",
        state : "",
        gender : "",
        dob : "",
        areasOfInterest : [], 
    })
    }
    const handleAddUser = async() => {
      await axios.post("http://localhost:3001/users",user);
      clearFormValues();
      fetchUserDetails();
    }
    const fetchUserDetails = () => {
      axios.get("http://localhost:3001/users").then((res)=> {
        setUsers(res.data);
      });
    }
    const handleEditUser = (usr,index)=>{
      setUser(usr);
      setIsEditIndex(index);
    }
    const handleUpdateUser = async() => {
      await axios.put("http://localhost:3001/users/"+user.id, user);
      clearFormValues();
      fetchUserDetails();
      setIsEditIndex(null);
    }
    const handleDeleteUser = async (usr) => {
      await axios.delete(("http://localhost:3001/users/"+usr.id));
      fetchUserDetails();
    }
    useEffect(()=>{
      fetchUserDetails();
    },[]);
  return (
    <div>
        <h3>CRUD - Dynamic Data</h3>
        <form>
            <label>FirstName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange}/> <br />
            <label>LastName : </label>
            <input type="text" name="lname" value={user.lname} onChange={handleChange}/> <br />
            <label>State : </label>
            <select name="state" value={user.state} onChange={handleChange}>
                <option value="">-- select state --</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="TS">Telangana</option>
                <option value="KA">Karnataka</option>
                <option value="MH">Maharashtra</option>
            </select> <br />
            <label>Gender : </label>
            <input type="radio" name="gender" value="male" checked={user.gender === "male"} onChange={handleChange}/> Male
            <input type="radio" name="gender" value="female" checked={user.gender === "female"} onChange={handleChange}/> Female
            <input type="radio" name="gender" value="others" checked={user.gender === "others"} onChange={handleChange}/> Others <br />
            <label>DOB : </label>
            <input type="date" name="dob" value={user.dob} onChange={handleChange}/> <br />
            <label>Areas of Interest : </label> <br />
            <input type="checkbox" name="areasOfInterest" value="sports" onChange={handleChange} checked={user.areasOfInterest.includes("sports")}/> Sports
            <input type="checkbox" name="areasOfInterest" value="music" onChange={handleChange} checked={user.areasOfInterest.includes("music")}/> Music
            <input type="checkbox" name="areasOfInterest" value="travel" onChange={handleChange} checked={user.areasOfInterest.includes("travel")}/> Travel
            <input type="checkbox" name="areasOfInterest" value="movies" onChange={handleChange} checked={user.areasOfInterest.includes("movies")}/> Movies
            <br />

            {
              isEditIndex === null ? <button type="button" onClick={handleAddUser}>Add Users</button>
              : <button type="button" onClick={handleUpdateUser}>Update Users</button>
            }
        </form> <br /><br />
        <table border={1}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
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
                  <td><button type="button" onClick={()=> handleEditUser(usr,index)}>Edit</button></td>
                  <td><button type="button" onClick={()=>handleDeleteUser(usr, index)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default FuncComp