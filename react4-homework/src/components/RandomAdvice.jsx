import { useState } from "react";
import "./post.css";

export default function RandomAdvice() {
  const [advice, setAdvice] = useState(null);
  const initial= "Click the button for a random advice!"

  async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div className="container">
      <div className="advice">
        <h4>{advice? advice : initial} </h4>
        <button onClick={fetchData}>Click me</button>
      </div>
    </div>
  );
}
