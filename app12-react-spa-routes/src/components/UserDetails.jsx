import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const [users,setUsers] = useState([]);
    const [filteredUser,setFilteredUser] = useState({});
    const {id} = useParams();

    const fetchDetails = () => {
        fetch("http://localhost:3001/users",{
            method: "GET",
            headers: {'Content-Type':'application/json'},
            body : null
        }).then((res)=>res.json()).then((data)=>{
            setUsers(data);
        })
    }
    
    useEffect(()=>{
        fetchDetails();
    },[]);  
    
    useEffect(()=>{
        if(users.length >0 && id){
            const user = users.find((u)=>u.id === id)
            setFilteredUser(user);
        }
    },[users,id])
  return (
    <div>
        <p>Welcome to UserDetails component.</p>
        {
            <ul>
                <li><b>FirstName :</b> {filteredUser.fname}</li>
                <li><b>LastName :</b> {filteredUser.lname}</li>
                <li><b>State :</b> {filteredUser.state}</li>
                <li><b>Gender :</b> {filteredUser.gender}</li>
                <li><b>DOB:</b> {filteredUser.dob}</li>
                <li><b>Areas Of Interest :</b> {filteredUser.areasOfInterest.join(", ")}</li>
            </ul>
        }
    </div>
  )
}

export default UserDetails