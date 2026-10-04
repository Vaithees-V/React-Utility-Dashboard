import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <section className="counter-card">
      <h2>Counter</h2>

      <div className="counter-value">
        {count}
      </div>

      {count === 0 && (
        <p className="limit-message">
          Minimum limit reached
        </p>
      )}

      <div className="counter-buttons">
        <button onClick={decrement}>−</button>

        <button onClick={increment}>+</button>

        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;