import React from 'react'
import PageNav from './PageNav'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{backgroundColor:"#262f32",height:"100vh"}}>
        <PageNav/>
        <div style={{backgroundColor:"#383f42",width:"fit-content",padding:"20px",margin:"auto",marginTop:"100px"}}>
            <form>
                <label>Email address</label> <br />
                <input type="email" name="email" id="email" style={{ width: "300px" }} value={"naveen@gmail.com"}/> <br />
                <label>Password</label> <br />
                <input type="password" name="passworrd" id="password" style={{ width: "300px" }} value={"naveen"}/> <br />
                <button type='button'><Link to={"/"} style={{textDecoration:"none"}}>Login</Link></button>
            </form>
        </div>
    </div>
  )
}

export default Login