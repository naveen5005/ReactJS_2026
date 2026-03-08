import React, { useState } from 'react'

const DateCounterV2 = () => {
    const [stepper,setStepper] = useState(1);
    const [counter,SetCounter] = useState(0);
  return (
    <div>
        <Stepper stepper={stepper} setStepper={setStepper}/>
        <DateCounter counter={counter} SetCounter ={SetCounter} stepper={stepper}/>
        <MessageDisplay counter={counter}/>
        <ResetCounter counter={counter} setStepper={setStepper} SetCounter={SetCounter} />
    </div>
  )
}
function Stepper({stepper,setStepper}){
    const handleStepper = (e) => {
        setStepper(Number(e.target.value));
    }
    return(
        <>
            <input type='range' min={1} max={10} onChange={handleStepper} value={stepper}/>{stepper}
        </>
    )
}
function DateCounter({ counter, SetCounter,stepper }) {
  const handleCounterChange = (e) => {
    const val = e.target.value; // string
    // Allow empty string while typing, else coerce to number
    if (val === "") {
      SetCounter(""); // keep controlled & empty (string)
    } else {
      const next = Number(val);
      SetCounter(Number.isNaN(next) ? 0 : next);
    }
  };

  const handleBlur = () => {
    // Normalize empty/invalid to 0 (or any default)
    if (counter === "" || Number.isNaN(Number(counter))) {
      SetCounter(0);
    }
  };

  const handleIncrement = () => {
    SetCounter((prev) => (prev === "" ? 1 : Number(prev) + stepper));
  };

  const handleDecrement = () => {
    SetCounter((prev) => (prev === "" ? -1 : Number(prev) - stepper));
  };

  // Ensure the input always receives a string/number, never null
  const safeValue = counter === null || counter === undefined ? "" : counter;

  return (
    <div>
      <button type="button" onClick={handleDecrement}>-</button>
      <input
        type="number"
        value={safeValue}
        onChange={handleCounterChange}
        onBlur={handleBlur}
      />
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
}
function MessageDisplay({counter}){   
    const date = new Date();
    date.setDate(date.getDate() + counter)
    return(
        <p>{counter} days from today is {date.toDateString()}</p>
    )
}
function ResetCounter({counter,SetCounter,setStepper}){
    const handleReset =() =>{
        SetCounter(0);
        setStepper(0);
    }
    return(
        <>
            {counter>=1 && <button type='button' onClick={handleReset}>Reset</button>}
        </>
    )
}

export default DateCounterV2