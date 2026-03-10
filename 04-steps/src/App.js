import { useState } from "react";
import "./App.css";
const messagesData = ["Learn React", "Apply for Job", "Invest your new income"];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" className="close" onClick={handleToggle}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <Steps step={step} />
          <Messages step={step} />
          <FooterButtons setStep={setStep} step={step} />
        </div>
      )}
    </>
  );
}
function Steps({ step }) {
  return (
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>
  );
}
function Messages({ step }) {
  return (
    <p style={{ textAlign: "center" }}>
      Step - {step} {messagesData[step - 1]}
    </p>
  );
}
const handleNextStep = (setStep, step) => {
  if (step >= 1 && step < 3) {
    setStep((step) => step + 1);
  }
};
const handlePevStep = (setStep, step) => {
  if (step <= 3 && step > 1) {
    setStep((step) => step - 1);
  }
};
function FooterButtons({ setStep, step }) {
  return (
    <div className="button">
      <Button onClick={() => handlePevStep(setStep, step)}>
        <span>👈Previous</span>
      </Button>
      <Button onClick={() => handleNextStep(setStep, step)}>
        <span>Next👉</span>
      </Button>
    </div>
  );
}
export default App;

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
