import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, isBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const handleReset = () => {
    isBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <BillInput bill={bill} isBill={isBill} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output
            bill={bill}
            percentage1={percentage1}
            percentage2={percentage2}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, isBill }) {
  return (
    <div>
      <label>How much the bill was ?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => isBill(e.target.value)}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, setPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      >
        <option value={"0"}>Dissatisfied (0%)</option>
        <option value={"5"}>It was ok (5%)</option>
        <option value={"10"}>It was good (10%)</option>
        <option value={"20"}>Absoultly amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, percentage1, percentage2 }) {
  const avg = (Number(percentage1) + Number(percentage2)) / 2;
  return (
    <p>
      You pay {Number(bill) + Number(avg)} ({bill}+{avg}) tip
    </p>
  );
}
function Reset({ onReset }) {
  return (
    <button type="button" onClick={onReset}>
      Reset
    </button>
  );
}
export default App;
