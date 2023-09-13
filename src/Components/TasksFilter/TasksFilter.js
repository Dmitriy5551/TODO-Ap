import './TasksFilter.css';

function TasksFilter({ currentFilter, onFilterChange }) {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => onFilterChange('All')}>All</button>
      </li>
      <li>
        <button onClick={() => onFilterChange('Active')}>Active</button>
      </li>
      <li>
        <button onClick={() => onFilterChange('Completed')}>Completed</button>
      </li>
    </ul>
  );
}


export default TasksFilter;