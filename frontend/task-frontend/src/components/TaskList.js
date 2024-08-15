import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
