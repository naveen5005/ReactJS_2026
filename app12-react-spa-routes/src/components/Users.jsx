import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
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
  return (
    <div>
        <p>Welcome to Users component.</p>
        {
            users.map((usr)=>(
                <ul key={usr.id}>
                    <Link to={`${usr.id}`}><li>{usr.fname}</li></Link>
                </ul>
            ))
        }
        <Outlet/>
    </div>
  )
}

export default Users