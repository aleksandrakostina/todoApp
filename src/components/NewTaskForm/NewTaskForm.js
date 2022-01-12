import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    value: "",
  };

  onChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.value}
          onChange={this.onChangeValue}
        />
      </form>
    );
  }
}
