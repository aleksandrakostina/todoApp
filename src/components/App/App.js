import React, { Component } from 'react';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import './App.css';

class App extends Component {
  maxId = 1;

  state = {
    todos: [this.createItem('Completed task'), this.createItem('Editing task'), this.createItem('Active task')],
    filter: 'all',
    timerId: null
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  };

  deleteCompletedItems = () => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => !todo.completed),
    }));
  };

  changeStatusItem = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  addItem = (text, time) => {
    this.setState(({ todos }) => ({
      todos: [...todos, this.createItem(text, time)],
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return 'all';
    }
  };

  upadateTime = (id, time) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => (todo.id === id ? { ...todo, time } : todo)),
    }));
  }

  setTimerId = (id) => {
    this.setState({timerId: id});
  }

  createItem(text, time = 0) {
    this.maxId += 1;

    return {
      id: this.maxId,
      completed: false,
      description: text,
      created: new Date(),
      time
    };
  }

  render() {
    const { todos, filter, timerId } = this.state;
    const countIncompletedItem = todos.filter((todo) => !todo.completed).length;
    const visibleTodos = this.filterItems(todos, filter);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList todos={visibleTodos} deleteItem={this.deleteItem} changeStatusItem={this.changeStatusItem} upadateTime={this.upadateTime} timerId={timerId} setTimerId={this.setTimerId} />
          <Footer
            deleteCompletedItems={this.deleteCompletedItems}
            countIncompletedItem={countIncompletedItem}
            onFilterChange={this.onFilterChange}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}

export default App;
