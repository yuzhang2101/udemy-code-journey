import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <h3 className="message">{messages[step - 1]}</h3>
          <div className="buttons">
            <button disabled={step == 1} onClick={handlePrevious}>
              <span>Previous</span>
            </button>
            <button disabled={step == 3} onClick={handleNext}>
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
