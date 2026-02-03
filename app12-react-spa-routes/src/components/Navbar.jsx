import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul style={{listStyle:"none",display :"flex",justifyContent :"space-between"}}>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/users"}>Users</Link>
            </li>
            <li>Contacts</li>
            <li>Contact Us</li>
            <li>Description</li>
            <li>getDetails</li>
            <li>Informative</li>
        </ul>
    </div>
  )
}

export default Navbar