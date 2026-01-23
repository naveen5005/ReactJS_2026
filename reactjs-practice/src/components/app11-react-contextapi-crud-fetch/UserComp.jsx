import React, { useContext, useEffect, useState } from 'react'
import { UseContext } from './ReUsableContextapp11'

const UserComp = () => {
    const [user,setUser] = useState({
        fname :"",
        lname: "",
        state: "",
        gender: "",
        dob: "",
        areasOfInterest: []
    })
    const [users,setUsers] = useState([]);
    const [isEditIndex,setIsEditIndex] = useState(null);

    const {commonServerCommunication} = useContext(UseContext);
    
    const getDataFromServer = async () => {
        var results = await (await fetch("http://localhost:3001/users", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            body: null
        })).json();
        setUsers(results);
    }
    
    // const handleChange = (e) => {
    //     const { name, value, checked } = e.target;

    //     // Allow only alphabets and spaces
    //     if ((name === "fname" || name === "lname") && !/^[a-zA-Z\s]*$/.test(value)) {
    //         return;
    //     }
    //     const newUser ={...user};
    //     if(name === "areasOfInterest"){
    //         const updatedAreasOfInterest = [...newUser.areasOfInterest];
    //         if(checked){
    //             updatedAreasOfInterest.push(value);
    //         } else{
    //             const index = updatedAreasOfInterest.indexOf(value);
    //             updatedAreasOfInterest.splice(index,1);
    //         }
    //         newUser.areasOfInterest = updatedAreasOfInterest;
    //     } else {
    //         newUser[name] = value;
    //     }
    //     setUser(newUser)
    // };

    const handleChange = (e) => {
        const {name, value, checked } = e.target;
        setUser((prev)=>{
            if(name === "areasOfInterest"){
                return {
                    ...prev,
                    areasOfInterest: checked ? 
                    [...prev.areasOfInterest,value] : 
                    prev.areasOfInterest.filter((item)=>item!==value)
                }
            }
            return {
                ...prev,
                [name] : value
            }
        })
    }
    const clearFormValues = () => {
        setUser({
        fname :"",
        lname: "",
        state: "",
        gender: "",
        dob: "",
        areasOfInterest: []
    })
    }
    useEffect(()=>{
        getDataFromServer();
    },[])
    const handleAdd = () => {
        commonServerCommunication("POST",user);
        clearFormValues();
        getDataFromServer();
    }
    const handleDelete = async (user) => {
        await commonServerCommunication("DELETE",user);
        getDataFromServer();
    }
    const handleEdit = (user) => {
        setUser(user);
        setIsEditIndex(user.id);
    }
    const handleUpdate = async() => {
        await commonServerCommunication("PUT",user);
        clearFormValues();
        setIsEditIndex(null);
        getDataFromServer();
    }
  return (
    <div>
        <form>
            <label>FullName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />
            <label>LastName : </label>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} /> <br />
            <label>State : </label>
            <select name="state" value={user.state} onChange={handleChange}>
                <option value="">--select--</option>
                <option value="TS">TS</option>
                <option value="MH">MH</option>
                <option value="AP">AP</option>
            </select> <br />
            <label>Gender : </label>
            <input type="radio" name="gender" onChange={handleChange} value={"male"} checked={user.gender === "male"} /> Male
            <input type="radio" name="gender" onChange={handleChange} value={"female"} checked={user.gender === "female"} /> Female            
            <input type="radio" name="gender" onChange={handleChange} value={"others"} checked={user.gender === "others"} /> Others <br />
            <label>DOB : </label>
            <input type="date" name="dob" value={user.dob} onChange={handleChange} /> <br />
            <label>Areas of Interest : </label>
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"travel"} checked = {user.areasOfInterest.includes("travel")} /> Travel 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"movies"} checked = {user.areasOfInterest.includes("movies")} /> Movies 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"music"} checked = {user.areasOfInterest.includes("music")} /> Music 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"sports"} checked = {user.areasOfInterest.includes("sports")} /> Sports <br />

            {
                isEditIndex === null ? <button type="button" onClick={handleAdd}>Add</button>
                : <button type="button" onClick={handleUpdate}>Update</button>
            } <br /><br /><br />
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>LastName</th>
                    <th>state</th>
                    <th>gender</th>
                    <th>dob</th>
                    <th>areas of interest</th>
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
                            <td>
                                <button type="button"onClick={()=>handleEdit(usr)}>edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={()=>handleDelete(usr)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserComp