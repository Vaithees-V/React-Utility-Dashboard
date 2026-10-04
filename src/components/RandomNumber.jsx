import { useState } from "react";
import "./RandomNumber.css";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  function generateNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  }

  function resetNumber() {
    setRandomNumber(null);
  }

  return (
    <section className="random-card">
      <h2>Random Number Generator</h2>

      <div className="random-value">
        {randomNumber === null? "No number generated yet": randomNumber}
      </div>

      <div className="random-buttons">
        <button onClick={generateNumber}>
          Generate Random Number
        </button>

        <button onClick={resetNumber}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default RandomNumber;