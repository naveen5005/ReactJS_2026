import React from 'react'
import { UseContext } from './Context'

const ClickCounterContext = () => {

  return (
    <div>
        <UseContext.Consumer>
            {
                ({counter,handleIncrement,handleDecrement})=>{
                    return(
                        <>
                            <p>counter - {counter}</p>
                            <button type="button" onClick={handleIncrement} style={{marginRight:"10px"}}>Inc</button>
                            <button type="button" onClick={handleDecrement}>Dec</button>
                        </>
                    )
                }
            }
        </UseContext.Consumer>
    </div>
  )
}

export default ClickCounterContext