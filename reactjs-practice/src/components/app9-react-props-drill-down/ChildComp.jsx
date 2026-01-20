import React from 'react'
import ContentComp from './ContentComp'

const ChildComp = (props) => {
    const {name} = props;
  return (
    <div>
        <h4>Welcome to Child Comp</h4>
        <ContentComp name = {name} />
    </div>
  )
}

export default ChildComp