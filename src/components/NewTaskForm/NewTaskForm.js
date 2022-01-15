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
    value: '',
  };

  onChangeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    const { addItem } = this.props;
    const { value } = this.state;

    event.preventDefault();
    addItem(value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        <input className="new-todo" placeholder="What needs to be done?" value={value} onChange={this.onChangeValue} />
      </form>
    );
  }
}
