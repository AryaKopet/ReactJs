// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, id: Date.now(), completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'text-white' : 'text-black'
      }`}
    >
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Kegiatan hari ini</h1>

        <div className="mb-4">
          <input
            type="text"
            className={`border p-2 w-full ${
              darkMode ? 'text-white bg-purple-800' : 'bg-gray-100'
            }`}
            placeholder="ngapain ya?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        <button
          className={`${
            darkMode ? 'bg-purple-500' : 'bg-purple-700'
          } text-white p-2 w-full`}
          onClick={() => addTask()}
        >
          Tambahkan
        </button>

        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between bg-purple-800 text-white p-2 rounded mt-2 ${
                task.completed
                  ? darkMode
                    ? 'bg-green-700'
                    : 'bg-green-600'
                  : darkMode
                  ? 'hover:bg-purple-700'
                  : 'hover:bg-purple-600'
              }`}
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                  className="mr-2"
                />
                {task.name}
              </div>
              <button
                className="text-white bg-red-500 p-1 rounded-md"
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <label className="mr-2 font-serif">Mulailah dengan bismillah</label>
        </div>
      </div>
    </div>
  );
}

export default App;
