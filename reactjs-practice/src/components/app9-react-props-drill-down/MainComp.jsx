import React, { useState } from 'react'
import ParentComp from './ParentComp';

const MainComp = () => {
    const [name,setName] = useState("Naveen");
  return (
    <div>
        <h2>Welcome to Main Component</h2>
        <ParentComp name = {name}/>
    </div>
  )
}

export default MainComp