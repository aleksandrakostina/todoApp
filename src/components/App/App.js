import React from "react";
import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import "./App.css";

const App = () => {
  const todos = [
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
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todos} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
