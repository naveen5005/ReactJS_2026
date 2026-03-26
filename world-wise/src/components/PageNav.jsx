import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PageNav.css'
const PageNav = () => {
  return (
    <nav>
      <Link to={"/"}><img src='/logo.png' alt='logo'/></Link>
        <ul>
            <li><Link to={"/app"}>App Layout</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/pricing"}>Pricing</Link></li>
            <li><Link to={"/login"}><button type='button' className="getStartedBtn">Login</button></Link></li>
        </ul>
    </nav>
  )
}

export default PageNav