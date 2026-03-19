import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const content = [
    {
      summary: "React is a library for building UIs",
      details:
        "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      summary: "State management is like giving state a home",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      summary: "We can think of props as the component API",
      details:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  function Tabs({ index, setIndex }) {
    return (
      <div>
        {content.map((con, i) => (
          <button
            key={i}
            style={{
              marginLeft: "5px",
              cursor: "pointer",
              backgroundColor: index === i ? "royalblue" : "lightgray",
            }}
            onClick={() => setIndex(i)}
          >
            Tab {i + 1}
          </button>
        ))}
        <button
          type="button"
          style={{
            marginLeft: "5px",
            cursor: "pointer",
          }}
          onClick={()=>setIndex(4)}
        >
          Tab 4
        </button>
      </div>
    );
  }
  function TabContent({ item, index }) {
    const [isShow, setIsShow] = useState(true);
    const [isLike,setIsLike] = useState(0);
    return (
      <div
        style={{
          border: "1px solid black",
          width: "400px",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <h2>{item[index].summary}</h2>
        {isShow && <p>{item[index].details}</p>}
        <p onClick={() => setIsShow((prev) => !prev)}>
          {isShow ? "show less..." : "show more..."}
        </p>
        <span>{isLike ===0 ? '♡' : '❤️'}{isLike}</span>
        <button onClick={()=>setIsLike((prev)=>prev+1)}>Like it</button>
      </div>
    );
  }
  function DifferenceContent(){
    return(
       <div
        style={{
          border: "1px solid black",
          width: "400px",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
        }}
      >
       state will reset boom....
      </div>     
    )
  }
  return (
    <div className="App">
      <Tabs index={index} setIndex={setIndex} />
      {
        index <=3 ? <TabContent index={index} item={content} /> : <DifferenceContent/>
      }
    </div>
  );
}

export default App;
