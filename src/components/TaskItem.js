const TaskItem = ({ task, deleteTask, completeTask, editTask }) => {
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button onClick={() => completeTask(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  