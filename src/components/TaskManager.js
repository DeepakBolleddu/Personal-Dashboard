// TaskManager.js

import React, { useState } from 'react';
import './TaskManager.css'; // Import CSS file for styling

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // Add task function
  const addTask = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  // Remove task function
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="task-input">
        <input type="text" placeholder="Enter task" />
        <button>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
