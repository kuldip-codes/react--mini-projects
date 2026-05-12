import { useState } from "react";
import "./App.css";

function App() {
  // Store the current counter value. The app starts counting from 0.
  const [count, setCount] = useState(0);
  const maxCount = 100;
  const progress = (count / maxCount) * 100;

  // Increase the count by 1 using the latest state value.
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // Decrease the count by 1 using the latest state value.
  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  // Bring the counter back to its starting value.
  const resetCount = () => {
    setCount(0);
  };

  return (
    // Main wrapper centers the counter card on the page.
    <main className="react-counter">
      {/* Counter card holds the title, number, progress, and action buttons. */}
      <section className="counter-card">
        <div className="counter-header">
          <span className="counter-eyebrow">Minimal counter</span>
          <h1>Count smarter</h1>
        </div>

        <div className="counter-display-box">
          {/* Show the live counter value from React state. */}
          <p className="count-display">{count}</p>
          <p className="count-label">Current value</p>
        </div>

        <div className="counter-meta">
          <span>0</span>
          <span>{maxCount}</span>
        </div>

        {/* Progress bar gives quick visual feedback between 0 and 100. */}
        <div className="progress-track" aria-hidden="true">
          <span className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="counter-actions">
          <button
            type="button"
            className="counter icon-button"
            aria-label="Decrease count"
            // Stop the value from going below 0.
            disabled={count === 0}
            onClick={decrementCount}
          >
            -
          </button>

          {/* Reset is centered so it stays easy to find. */}
          <button type="button" className="reset-button" onClick={resetCount}>
            Reset
          </button>

          <button
            type="button"
            className="counter icon-button primary"
            aria-label="Increase count"
            // Stop the value from going above 100.
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
