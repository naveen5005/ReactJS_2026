import React from 'react'

const ContentComp = (props) => {
  return (
    <div>
        <h5>Welcome to Content Comp</h5>
        <p>Full Name - {props.name}</p>
    </div>
  )
}

export default ContentComp