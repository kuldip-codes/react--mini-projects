import { useState } from "react";

const [input, setInput] = useState("");

const addTodo = () => {
  if (!input) return;

  setInput();
};

const App = () => {
  return (
    <>
      <div className="interactive-bg" aria-hidden="true">
        <span className="bg-grid"></span>
        <span className="bg-orb bg-orb-one"></span>
        <span className="bg-orb bg-orb-two"></span>
        <span className="bg-orb bg-orb-three"></span>
      </div>

      <main className="app-shell">
        <section className="todo-card" aria-labelledby="app-title">
          <header className="todo-header">
            <div className="header-meta">
              <p className="eyebrow">Minimal planner</p>
              <span>Today</span>
            </div>
            <h1 id="app-title">Todo List</h1>
            <p>A quiet place to keep a few tasks in view.</p>
          </header>

          <form className="todo-form" action="#">
            <label className="sr-only" htmlFor="task-title">
              Task title
            </label>
            <input
              id="task-title"
              name="task-title"
              type="text"
              placeholder="Add a new task"
              autoComplete="off"
              maxLength="80"
              value={value}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={addTodo}>
              Add
            </button>
          </form>

          <section className="todo-list-section" aria-labelledby="tasks-title">
            <div className="list-header">
              <h2 id="tasks-title">Tasks</h2>
              <p>2 open</p>
            </div>

            <ul className="task-list">
              <li className="task-item">
                <div className="task-row">
                  <label>
                    <input type="checkbox" />
                    <span className="task-content">
                      <strong>Finalize project outline</strong>
                      <time dateTime="2026-05-13T09:30">Added 9:30 AM</time>
                    </span>
                  </label>
                  <button
                    className="delete-task"
                    type="button"
                    aria-label="Delete Finalize project outline"
                  >
                    x
                  </button>
                </div>
              </li>
              <li className="task-item">
                <div className="task-row">
                  <label>
                    <input type="checkbox" defaultChecked />
                    <span className="task-content">
                      <strong>Send standup update</strong>
                      <time dateTime="2026-05-13T09:15">Added 9:15 AM</time>
                    </span>
                  </label>
                  <button
                    className="delete-task"
                    type="button"
                    aria-label="Delete Send standup update"
                  >
                    x
                  </button>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
