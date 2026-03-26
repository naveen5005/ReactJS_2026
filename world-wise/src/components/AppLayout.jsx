import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <h1>AppLayout</h1>
        <Link to={"cities"}><p>Cites</p></Link>
        <Link to={"countries"}><p>Countries</p></Link>
        <Outlet/>
    </div>
  )
}

export default AppLayout