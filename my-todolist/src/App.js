// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, done: false }]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskDone = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
    </div>
  );
};

export default App;