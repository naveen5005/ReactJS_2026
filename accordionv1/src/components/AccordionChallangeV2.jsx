import React, { useState } from 'react'

const AccordionChallangeV2 = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer:
        "A component is a reusable UI element that controls its own structure and behavior.",
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is data managed inside a component that can change over time and trigger re-renders.",
    },
    {
      id: 4,
      question: "What are props in React?",
      answer:
        "Props are read-only values passed from a parent component to a child component.",
    },
    {
      id: 5,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks like HTML and is used in React.",
    },
    {
      id: 6,
      question: "What is lifting state up?",
      answer:
        "Lifting state up means moving shared state to the nearest common parent component.",
    },
    {
      id: 7,
      question: "What is derived state?",
      answer:
        "Derived state is data computed from other state or props instead of storing it separately.",
    },
    {
      id: 8,
      question: "What is useEffect used for?",
      answer:
        "useEffect is used to run side effects such as fetching data, timers, or DOM manipulation.",
    },
    {
      id: 9,
      question: "What is a controlled component?",
      answer:
        "A controlled component is a form input whose value is managed by React state.",
    },
    {
      id: 10,
      question: "What is virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates.",
    },
  ]);
  const [curOpen, isCurOpen] = useState(null)
  return (
    <div className="App">
      {questions.map((que) => (
        <AccordionItems num={que.id} title={que.question} text={que.answer} key={que.id} curOpen={curOpen} isCurOpen={isCurOpen} />
      ))}
    </div>
  );
};

function AccordionItems({ num, title, text, curOpen, isCurOpen }) {  
    const isOpen = num === curOpen;
  const containerStyle = {
      border: "2px solid lightgrey",
      width: "600px",
      margin: "auto",
      marginBottom: "10px",
      borderTop: isOpen ? "3px solid green" : undefined,
      borderRadius: 8,
    };
  const numStyle ={
    paddingRight:"10px",
    color: isOpen ? "green": "lightgray"
  }
  const handleToggle = () => {
    isCurOpen(isOpen ? null : num);
  }
  return (
    <div style={containerStyle}>
      <div style={{display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>
        <div style={{display:"flex",marginRight:"10px"}}>
        <p style={numStyle}>{num}</p>
        <p>{title}</p>
        </div>
        <p onClick={handleToggle} style={{cursor: "pointer"}}>{isOpen ? '-' : '+'}</p>
      </div>
      {isOpen && <div style={{textAlign:"start",marginLeft:"37px",marginBottom:"20px"}}>{text}</div>}
    </div>
  );
}
export default AccordionChallangeV2