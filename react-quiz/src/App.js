import { useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import QuestionsDisplay from "./components/QuestionsDisplay";
import Footer from "./components/Footer";

const initialState = {
  questions: [],
  index : 0,
  answer : null,
  correctAnswers: 0,
  secondsRemaining: 180,
  quizCompleted: false
}
function reducer(state,action){
  switch (action.type) {
    case "getQuestionsData":
      return {...state, questions : action.payload}
    case "newAnswer":
      return {...state, answer : action.payload}  
    case "nextQuestion":
      return {...state, index : action.payload, answer : null}
    case "correctAnswer":
      return {...state, correctAnswers : action.payload + state.correctAnswers}  
    case "restart":
      return{...initialState,questions:state.questions}  
    case "tick":      
    if (state.secondsRemaining === 0) {
      return { ...state, secondsRemaining:0,quizCompleted: true }; 
    }
    return {...state, secondsRemaining: state.secondsRemaining-1}  
    default:
      return state;
  }
}
function App() {
  const[{questions,index,answer,correctAnswers,secondsRemaining,quizCompleted},dispatch] = useReducer(reducer,initialState)
  const totalPoints = questions.reduce((acc,question) => acc + question.points,0);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/questions");
    const data = await res.json();
    dispatch({type :"getQuestionsData",payload : data})
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Main>
        {quizCompleted ? (
          <>
            <h1 style={{ textAlign: "center", color: "white" }}>⏳ Quiz Completed!</h1>
            <p style={{ textAlign: "center", color: "white" }}>You scored: {correctAnswers}</p>
          </>
        ) : (
          <>
            <input 
              type="range" 
              style={{ width: "600px", marginLeft: "26%" }} 
              min={1} 
              max={questions.length} 
              value={index + 1} 
              readOnly
            />

            <div className="main-header">
              <h3>Questions {index + 1}/{questions.length}</h3>
              <h3>{correctAnswers}/{totalPoints} points</h3>
            </div>

            <QuestionsDisplay 
              dispatch={dispatch} 
              answer={answer} 
              question={questions[index]} 
              correctAnswers={correctAnswers} 
            />
          </>
        )}
      </Main>
      <Footer dispatch={dispatch} index={index} questions={questions} answer={answer} secondsRemaining={secondsRemaining} quizCompleted={quizCompleted}/>
    </div>
  );
}

export default App;
