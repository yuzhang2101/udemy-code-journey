import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  // const [adviceObject, setAdviceObject] = useState({ count: 0, advice: "" });

  useEffect(() => {
    console.log("component mounted");
    fetchAdvice();
  }, []);
  async function fetchAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      // setAdviceObject((adviceObject) => ({
      //   count: adviceObject.count + 1,
      //   advice: data.slip.advice,
      // }));
      setAdvice(data.slip.advice);
      setCount((count) => count + 1);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1> Hello world</h1>
      <button onClick={fetchAdvice}>get advice</button>
      <Message count={count} />
      <p>{advice}</p>
    </>
  );
}

export default App;

function Message(props) {
  return <p>you have read {props.count} pieces of advices</p>;
}
