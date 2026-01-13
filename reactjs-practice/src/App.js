import './App.css';
import ParentClassComp from './components/app1-react-life-cycles-class/ParentClassComp';
import ClickCounter from './components/app3-render-props-func/ClickCounter';
import HoverCounter from './components/app3-render-props-func/HoverCounter';
import ReusableCounter from './components/app3-render-props-func/ReusableCounter';
import ClickCountClass from './components/app4-render-props-class/ClickCountClass';
import HoverCountClass from './components/app4-render-props-class/HoverCountClass';
import ReusableCountClass from './components/app4-render-props-class/ReusableCountClass';
import ClassCrud01 from './components/ClassCrud01';
import ClassCrud02 from './components/ClassCrud02';
import FuncCrud from './components/FuncCrud';
import FuncCrudPrac from './components/FuncCrudPrac';
import ClassComp from './components/JSON-CRUD/ClassComp';
import FuncComp from './components/JSON-CRUD/FuncComp';

function App() {
  return (
    <div className="App">
      {/* <ClassCrud01 /> */}
      {/* <ClassCrud02 /> */}
      {/* <FuncCrud/> */}
      {/* <FuncCrudPrac/> */}
      {/* <FuncComp/> */}
      {/* <ClassComp/> */}
      {/* <ParentClassComp/> */}
      {/* <ReusableCounter render={(counter,handleIncrement,handleDecrement)=>{
        return(
          <ClickCounter 
            counter = {counter}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
          />
        )
      }}/>
      <hr></hr> */}
      {/* <ReusableCounter render={(counter,handleIncrement,handleDecrement)=>{
        return(
          <HoverCounter
            counter = {counter}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
          />
        )
      }}/> */}

      <ReusableCountClass render = {(counter,handleIncrement,handleDecrement)=>(
        <HoverCountClass 
          counter = {counter}
          handleIncrement = {handleIncrement}
          handleDecrement = {handleDecrement}
        />
      )}/>
      <hr></hr>
      <ReusableCountClass render = {(counter,handleIncrement,handleDecrement)=>(
        <ClickCountClass 
          counter = {counter}
          handleIncrement = {handleIncrement}
          handleDecrement = {handleDecrement}
        />
      )}/>
    </div>
  );
}

export default App;

