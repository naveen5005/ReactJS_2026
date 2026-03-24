import React, { useEffect } from 'react'

const Footer = ({index,dispatch,questions,answer,secondsRemaining,quizCompleted}) => {
  // if(answer === null) return null;
  // if(secondsRemaining === 0) return;
  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion", payload: index + 1 });
  }
  const handleReset = () => {
    dispatch({type: "restart"})
  }

  useEffect(() => {
    if (quizCompleted) return; // ⛔ stop timer completely when completed
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timer); // cleanup
  }, [dispatch, quizCompleted]);

  return (
    <div className='footer'>
      
      {/* Show timer only when NOT completed */}
      {!quizCompleted && (
        <button type="button">{secondsRemaining}</button>
      )}

      {/* Show Reset when quiz completed OR last question reached */}
      {(quizCompleted || questions.length === index + 1) ? (
        <button type="button" onClick={handleReset}>Restart</button>
      ) : (
        <button type="button" onClick={handleNextQuestion}>Next</button>
      )}

    </div>
  )
}

export default Footer