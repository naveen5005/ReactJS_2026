import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = (props) => {
    const {name} = props
  return (
    <div>
        <h3>Welcome to Parent Comp</h3>
        <ChildComp name = {name}/>
    </div>
  )
}

export default ParentComp