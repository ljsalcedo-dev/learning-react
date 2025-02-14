import Button from "./Button.jsx";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count % 2 === 0 ? "Even" : "Odd";
  });

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    setCount((c) => (c = 0));
  };

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

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
