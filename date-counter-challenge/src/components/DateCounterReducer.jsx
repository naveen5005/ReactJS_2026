import React, { useReducer } from 'react'
const initialState = {
    counter : 0,
    step: 1
}
function reducer(state,action){
    switch (action.type) {
        case 'Increment':
            return {...state,counter:state.counter+state.step}
        case 'Decrement':
            return{...state,counter:state.counter-state.step}
        case 'Stepper':
            return{...state,step:action.paylod}    
        default:
            return state;
    }
}
const DateCounterReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <Stepper step={state.step} dispatch={dispatch}/>
        <Counter counter={state.counter} dispatch={dispatch}/>
        <MessageDisplay counter={state.counter}/>
    </div>
  )
}
function Stepper({step,dispatch}){
    return <div>
        <input type='range' min={1} max={10} value={step} onChange={(e)=>dispatch({type:"Stepper",paylod: Number(e.target.value)})}/> {step}
    </div>
}
function Counter({counter,dispatch}){
    return <div>
        <button type='button' onClick={()=>dispatch({type:"Decrement"})}>-</button>
        {counter}
        <button type='button' onClick={()=>dispatch({type: "Increment"})}>+</button>
    </div>
}
function MessageDisplay({counter}){
    const date = new Date();
    date.setDate(date.getDate()+counter)
    return(
        <p>{counter} days from today is {date.toDateString()}</p>
    )
}
export default DateCounterReducer