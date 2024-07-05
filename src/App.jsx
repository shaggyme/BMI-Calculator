// Under 18.5	Underweight
// 18.5 - 24.9	Normal
// 25 - 29.9	Overweight
// 30 and over	Obese

import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(2);
  }, [weight, height]);

  const status = useMemo(() => {
    if (output < 18.5) {
      return "Underweight";
    } else if (output < 25) {
      return "Normal";
    } else if (output < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }, [output]);

  return (
    <>
      <main>
        <h1>BMI Calculator</h1>
        <div className="input-section">
          <p className="slider-output">Weight: {weight}kg</p>
          <input
            className="input-slider"
            type="range"
            min="40"
            max="200"
            step={1}
            onChange={onWeightChange}
          />
          <p className="slider-output">Height: {height}cm</p>
          <input
            className="input-slider"
            type="range"
            min="130"
            max="240"
            onChange={onHeightChange}
          />
        </div>
        <div className="output-section">
          <p>Your BMI is</p>
          <p className="output">{output}</p>
          <h3 className="output-status">{status}</h3>
        </div>
      </main>
    </>
  );
}

export default App;
