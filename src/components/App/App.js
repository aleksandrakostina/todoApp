import React, { Component } from 'react';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import './App.css';

class App extends Component {
  maxId = 3;

  state = {
    todos: [
      {
        id: 1,
        completed: true,
        description: 'Completed task',
        created: new Date(2022, 0, 10, 10, 10),
      },
      {
        id: 2,
        completed: false,
        description: 'Editing task',
        created: new Date(2022, 0, 10, 10, 20),
      },
      {
        id: 3,
        completed: false,
        description: 'Active task',
        created: new Date(2022, 0, 10, 10, 30),
      },
    ],
    filter: 'all',
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

  createItem = (text) => {
    this.maxId += 1;

    return {
      id: this.maxId,
      completed: false,
      description: text,
      created: new Date(),
    };
  };

  addItem = (text) => {
    this.setState(({ todos }) => ({
      todos: [...todos, this.createItem(text)],
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

  render() {
    const { todos, filter } = this.state;
    const countIncompletedItem = todos.filter((todo) => !todo.completed).length;
    const visibleTodos = this.filterItems(todos, filter);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList todos={visibleTodos} deleteItem={this.deleteItem} changeStatusItem={this.changeStatusItem} />
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
