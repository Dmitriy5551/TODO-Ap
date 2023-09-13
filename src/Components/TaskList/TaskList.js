import Task from '../Task';
import './TaskList.css';

function TaskList({ tasks, onDeleted, onToggleDone }) {
  return (
    <ul className="todo-list">
      {tasks.map(({ id, ...taskProps }) => (
        <li key={id} className='todo-list-item'>
          <Task {...taskProps} 
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}/>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;