import Button from "./Button.jsx";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count => count - 1);
  }

  const handleReset = () => {
    setCount(count => count = 0);
  }

  const handleIncrement = () => {
    setCount(count => count + 1);
  }

  return (
    <>
      <div className="counter">
        <p>{count}</p>
        <div className="button-group">
          <Button handleClick={handleDecrement} text="Decrement" />
          <Button handleClick={handleReset} text="Reset" />
          <Button handleClick={handleIncrement} text="Increment" />
        </div>
      </div>
    </>
  );
}
