import TasksFilter from '../TasksFilter';
import './Footer.css';

function Footer({ count, onFilterChange, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;