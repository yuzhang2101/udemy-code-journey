import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
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
    </>
  );
}

export default App;
