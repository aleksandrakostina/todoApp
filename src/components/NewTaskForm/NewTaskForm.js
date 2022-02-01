import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    task: '',
    sec: '',
    min: '',
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    const { addItem } = this.props;
    const { task, min, sec } = this.state;
    const time = (!Number.isNaN(parseInt(min, 10)) && !Number.isNaN(parseInt(sec, 10))) ? parseInt(min, 10) * 60 + parseInt(sec, 10) : 0;

    event.preventDefault();
    if(task.trim()) {
      addItem(task, time);
      this.setState({
        task: '',
        min: '',
        sec: ''
      });
    }
  };

  render() {
    const { task, min, sec } = this.state;
  
    return (
      <form className="new-todo-form" onSubmit={this.onSubmitForm}>
        <input className="new-todo" placeholder="What needs to be done?" value={task} onChange={this.onChangeValue} name='task' />
        <input className="new-todo-form__timer" placeholder="Min" value={min} onChange={this.onChangeValue} name='min' />
        <input className="new-todo-form__timer" placeholder="Sec" value={sec} onChange={this.onChangeValue} name='sec' />
        <button className='new-todo-form__btn' type='submit'>Submit</button>
      </form>
    );
  }
}
