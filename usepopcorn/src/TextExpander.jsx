import React, { useState } from 'react'


export const AppAdmin = () => {
  return (
    <div>
        <TextExpander>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque quaerat, rerum vel magnam qui!
        </TextExpander>
        <TextExpander
            collapseNumWords = {5}
            expandButtonText = "Show Text"
            colapseButtonText = "Collapse Text"
            buttonColor  = "#ff6622"
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto id nulla unde earum blanditiis consectetur!
        </TextExpander>
        <TextExpander expanded = {true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo at, voluptatum possimus alias maxime?
        </TextExpander>
    </div>
  )
}

function TextExpander({
    collapseNumWords = 8,
    expandButtonText= "Show more",
    colapseButtonText = "Show less",
    buttonColor,
    expanded,
    children
}){
    const [isExpanded,setIsExpanded] = useState(expanded);
    const displayText = isExpanded ? children : children.split("").slice(0,collapseNumWords).join("")+"..."
    return <div>
                <span>{displayText}</span>
                <button onClick={()=>setIsExpanded((exp)=>!exp)}>{ isExpanded ? colapseButtonText : expandButtonText}</button>
            </div>
}