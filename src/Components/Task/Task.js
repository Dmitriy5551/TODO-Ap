import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import { Component } from 'react';

export default class Task extends Component {

  // state = {
  //   done: false
  // };

  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //     return {
  //       done: !done
  //     }
  //   });
  // }
  render() {
    const { description, created, onDeleted, onToggleDone, done } = this.props;
    const distanceToNow = formatDistanceToNow(new Date(created));
    // const { done } = this.state;

    let classNames = 'description';
    if(done) {
      classNames += ' done';
    } else {
      classNames = 'description'
    }

    return (
      <li>
        <div className="view">
          <input 
          className="toggle" 
          type="checkbox" 
          checked={done}
          onChange={ onToggleDone } />
          <label>
            <span className={classNames}
            onClick={ onToggleDone }>
              {description}
              </span>
            <span className="created">создано {distanceToNow} назад</span>
          </label>
          <button className="icon icon-edit"></button>
          <button 
          className="icon icon-destroy"
          onClick={onDeleted}
          ></button>
        </div>
      </li>
    );
  }
}
