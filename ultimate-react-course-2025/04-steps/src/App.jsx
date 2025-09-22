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
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <h3 className="message">{messages[step - 1]}</h3>
      <div className="buttons">
        <button disabled={step == 1} onClick={() => setStep(step - 1)}>
          <span>Previous</span>
        </button>
        <button disabled={step == 3} onClick={() => setStep(step + 1)}>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
