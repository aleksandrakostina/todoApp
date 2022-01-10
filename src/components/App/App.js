import React, { Component } from "react";
import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        completed: true,
        description: "Completed task",
        created: new Date(2022, 0, 10, 10, 10),
      },
      {
        id: 2,
        completed: false,
        description: "Editing task",
        created: new Date(2022, 0, 10, 10, 20),
      },
      {
        id: 3,
        completed: false,
        description: "Active task",
        created: new Date(2022, 0, 10, 10, 30),
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter((todo) => todo.id !== id),
      };
    });
  };

  changeStatusItem = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            todos={this.state.todos}
            deleteItem={this.deleteItem}
            changeStatusItem={this.changeStatusItem}
          />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
