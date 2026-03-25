import logo from "./logo.svg";
import "./App.css";
import { act, useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "depositMoney":
      return { ...state, balance: state.balance + 150 };
    case "withdrawMoney":
      if (state.balance <= 0) {
        return state;
      }
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return { ...state, loan: 5000 };
    case "payLoan":
      return { ...state, loan: 0 };
    case "closeAccount":
      return{...state, balance: 0, loan:0,isActive:false}
    default:
      return state;
  }
}
function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <h3>balance : {balance}</h3>
      <h3>Loan : {loan}</h3>
      <button
        type="button"
        disabled={balance !== 0}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        open account
      </button>{" "}
      <br></br>
      <button
        type="button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "depositMoney" })}
      >
        deposit 150
      </button>{" "}
      <br></br>
      <button
        type="button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "withdrawMoney" })}
      >
        withdraw 50
      </button>{" "}
      <br></br>
      <button
        type="button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "requestLoan" })}
      >
        request a loan of 5000
      </button>
      <br></br>
      <button
        type="button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "payLoan" })}
      >
        pay loan
      </button>{" "}
      <br></br>
      <button
        type="button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        close account
      </button>
    </div>
  );
}

export default App;
