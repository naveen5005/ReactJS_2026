import React from 'react'

const CardSection = () => {
const skillsList = [
  { skill: "JavaScript", level: "Advanced", color: "#F7DF1E" },
  { skill: "ReactJS", level: "Intermediate", color: "#61DBFB" },
  { skill: "NodeJS", level: "Intermediate", color: "#3C873A" },
  { skill: "HTML", level: "Advanced", color: "#E44D26" },
  { skill: "CSS", level: "Advanced", color: "#1572B6" },
  { skill: "TypeScript", level: "Intermediate", color: "#3178C6" },
  { skill: "Python", level: "Beginner", color: "#3776AB" },
  { skill: "SQL", level: "Intermediate", color: "#00758F" },
  { skill: "Git", level: "Advanced", color: "#F05032" },
  { skill: "Redux", level: "Intermediate", color: "#764ABC" }
];

  return (
    <div style={{padding:"30px"}}>
        <div style={{border:"5px solid black", maxWidth :"30%"}}>
            <Avatar/>
            <div style={{padding:"20px"}}>
                <Intro/>
                <SkillList skillsList = {skillsList}/>
            </div>

        </div>
    </div>
  )
}
function Avatar(){
    return <img src="./pizzas/funghi.jpg" alt="funghi" width={"100%"}/>
}
function Intro(){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Naveen Babu Bellam</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse quis nemo blanditiis minima ipsa!</p>
        </div>
    )
}
function SkillList(props){
    return(
        <div style={{display:"grid",gridTemplateColumns:"auto auto", justifyContent:"space-around", gap:"10px"}}>
            {
                props.skillsList.map((skill) => <Skills skill={skill.skill} color = {skill.color} level = {skill.level}
                key ={skill.skill} />)
            }
        </div>
    )
}
function Skills({skill,level,color}){
    return <div style={{backgroundColor : color, padding :"5px"}}>
        <span>{skill}</span>
        <span>
            {level === "Advanced" && '🍗'}
            {level === "Intermediate" && '🍕'}
            {level === "Beginner" && '🍔'}
        </span>
    </div>
}
export default CardSection