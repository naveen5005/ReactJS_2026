import logo from './logo.svg';
import './App.css';
import DateCounter from './components/DateCounter';
import DateCounterV2 from './components/DateCounterV2';
import DateCounterReducer from './components/DateCounterReducer';

function App() {
  return (
    <div className="App">
      {/* <DateCounter/> */}
      {/* <DateCounterV2/> */}
      <DateCounterReducer/>
    </div>
  );
}

export default App;
