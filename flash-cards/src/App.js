import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const questionLists = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language used to create interactive web pages.",
    },
    {
      id: 2,
      question: "What is an API?",
      answer:
        "An API is a set of rules that allows applications to communicate with each other.",
    },
    {
      id: 3,
      question: "What does HTML stand for?",
      answer: "HTML stands for HyperText Markup Language.",
    },
    {
      id: 4,
      question: "What is CSS used for?",
      answer: "CSS is used to style the layout and appearance of web pages.",
    },
    {
      id: 5,
      question: "What is a database?",
      answer:
        "A database is a system that stores and organizes data for easy access and management.",
    },
    {
      id: 6,
      question: "What is cloud computing?",
      answer:
        "Cloud computing refers to delivering computing services over the internet.",
    },
    {
      id: 7,
      question: "What is a function in programming?",
      answer:
        "A function is a reusable block of code designed to perform a specific task.",
    },
    {
      id: 8,
      question: "What is Git?",
      answer:
        "Git is a version control system used to track changes in source code.",
    },
    {
      id: 9,
      question: "What is AI?",
      answer: "AI is the simulation of human intelligence in machines.",
    },
    {
      id: 10,
      question: "What is an array?",
      answer:
        "An array is a data structure that stores multiple values in a single variable.",
    },
  ];
  const [slectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id !== slectedId ? id : null);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "10px",
      }}
    >
      {questionLists.map((ques) => (
        <p
          key={ques.id}
          className={slectedId === ques.id ? "selected" : ""}
          style={{ border: "1px solid gray", padding: "50px",cursor: "pointer" }}
          onClick={() => handleClick(ques.id)}
        >
          {slectedId === ques.id ? ques.answer : ques.question}
        </p>
      ))}
    </div>
  );
}

export default App;
