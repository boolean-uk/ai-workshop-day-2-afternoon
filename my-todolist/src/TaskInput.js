// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;