import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };
  return (
    <>
      <div>
        <span>step: {step}</span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count:</span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count} days from today is{" "}
          {new Date(
            new Date().setDate(new Date().getDate() + count)
          ).toLocaleDateString()}
        </span>
      </p>
      {!(count === 0 && step === 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

export default App;
