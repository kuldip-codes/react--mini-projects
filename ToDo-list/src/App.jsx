import { useState } from "react";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    setTodolist([
      ...todolist,
      { task: todoInput, completed: false, id: Date.now() },
    ]);
    setTodoInput("");
  };

  const removeTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  const markComplete = (id) => {
    setTodolist(
      todolist.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed } // Toggle completed
          : task,
      ),
    );
  };

  const todayDate = new Date().toLocaleDateString("en-IN", {});

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
              <span>{todayDate}</span>
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
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button type="submit" onClick={addTodo}>
              Add
            </button>
          </form>

          {todolist.length !== 0 && (
            <section
              className="todo-list-section"
              aria-labelledby="tasks-title"
            >
              <div className="list-header">
                <h2 id="tasks-title">Tasks</h2>
                <p>{todolist.filter((task) => !task.completed).length} open</p>
              </div>

              <ul className="task-list">
                {todolist.map((task) => (
                  <li className="task-item" key={task.id}>
                    <div className="task-row">
                      <label>
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => markComplete(task.id)}
                        />
                        <span className="task-content">
                          <strong>{task.task}</strong>
                          <time>
                            Added{" "}
                            {new Date().toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </time>
                        </span>
                      </label>
                      <button
                        className="delete-task"
                        type="button"
                        aria-label="{todolist.task}"
                        onClick={() => removeTask(task.id)}
                      >
                        x
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
