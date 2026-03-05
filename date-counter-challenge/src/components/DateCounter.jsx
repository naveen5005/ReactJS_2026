import { useState } from "react"


export default function DateCounter (){
  const [count,setCount] = useState(0);
  const [step, setStep] = useState(1);
  return(
    <>
      <StepCount step={step} setStep={setStep}/> <br />
      <MessageDisplay count={count}/>
      <Counter count={count} setCount={setCount} step={step}/> <br />
    </>
  )
}

function Counter({count,setCount, step}){
  return(
    <>
      <button type="button" onClick={()=>setCount((c)=>c-step)}>-</button>
      <span>Count - {count}</span>
      <button type="button" onClick={()=>setCount((c)=>c+step)}>+</button>
    </>
  )
}
function StepCount({step,setStep}){
  return(
    <>
      <button type="button" onClick={()=>setStep((s)=>s-1)}>-</button>
      <span>step - {step}</span>
      <button type="button" onClick={()=>setStep((s)=>s+1)}>+</button>
    </>
  )
}
function MessageDisplay({count}){
  const date = new Date();
  date.setDate(date.getDate() + count)
  return <p>{count === 0 ? `Today is `: count>0?`${count} from today is `:`${count} days ago was `}{date.toDateString()}</p>
}