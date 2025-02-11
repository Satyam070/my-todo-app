import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, "Learn CI/CD"]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input type="text" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              aria-label="Delete Task"
              onClick={() => removeTask(index)}
            >
              <svg
                data-testid="delete-icon"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
