// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask, toggleTaskDone }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          index={index} 
          removeTask={removeTask} 
          toggleTaskDone={toggleTaskDone} 
        />
      ))}
    </ul>
  );
};

export default TaskList;