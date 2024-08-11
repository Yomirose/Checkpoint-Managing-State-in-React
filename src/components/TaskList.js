import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, completeTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
