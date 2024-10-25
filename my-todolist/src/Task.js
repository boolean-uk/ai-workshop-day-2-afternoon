// Task.js
import React from 'react';

const Task = ({ task, index, removeTask, toggleTaskDone }) => {
  return (
    <li>
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => toggleTaskDone(index)}>
        {task.done ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default Task;