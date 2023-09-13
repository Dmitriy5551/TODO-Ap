import './NewTaskForm.css';
import { Component } from 'react';

export default class NewTaskForm extends Component {

  state = {
    description: ''
};

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.description)
    this.setState({ description: '' }); // Очистка поля после отправки
}

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" 
          placeholder="What needs to be done?" 
          autofocus
          onChange={this.onDescriptionChange}
          value={this.state.description}
          />
        </form>
      </header>
    );
  }
}