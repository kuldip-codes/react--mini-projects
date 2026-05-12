import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const maxCount = 100;
  const progress = (count / maxCount) * 100;

  // Functional updates keep the count correct even during rapid clicks.
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main className="react-counter">
      <section className="counter-card" aria-labelledby="counter-title">
        <div className="counter-header">
          <span className="counter-eyebrow">Minimal counter</span>
          <h1 id="counter-title">Count smarter</h1>
        </div>

        <div className="counter-display-box">
          {/* aria-live announces count changes without moving keyboard focus. */}
          <p
            className="count-display"
            aria-label={`Current count is ${count}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {count}
          </p>
          <p className="count-label">Current value</p>
        </div>

        <div className="counter-meta">
          <span>0</span>
          <span>{maxCount}</span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Counter progress"
          aria-valuemin={0}
          aria-valuemax={maxCount}
          aria-valuenow={count}
        >
          <span className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="counter-actions">
          <button
            type="button"
            className="counter icon-button"
            aria-label="Decrease count"
            disabled={count === 0}
            onClick={decrementCount}
          >
            -
          </button>

          <button type="button" className="reset-button" onClick={resetCount}>
            Reset
          </button>

          <button
            type="button"
            className="counter icon-button primary"
            aria-label="Increase count"
            disabled={count === maxCount}
            onClick={incrementCount}
          >
            +
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
