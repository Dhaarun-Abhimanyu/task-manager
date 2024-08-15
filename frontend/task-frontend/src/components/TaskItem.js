import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <div className="task-item">
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
