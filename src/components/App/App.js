import React, { useMemo, useRef, useState } from 'react';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import './App.css';

const App = () => {
  const maxId = useRef(0);

  function createItem(text) {
    maxId.current += 1;

    return {
      id: maxId.current,
      completed: false,
      description: text,
      created: new Date(),
    };
  }

  const initialState = useMemo(
    () => [createItem('Completed task'), createItem('Editing task'), createItem('Active task')],
    []
  );

  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteCompletedItems = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const changeStatusItem = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const addItem = (text) => {
    setTodos((prevTodos) => [...prevTodos, createItem(text)]);
  };

  const onFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filterItems = (items, filterValue) => {
    switch (filterValue) {
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

  const countIncompletedItem = todos.filter((todo) => !todo.completed).length;
  const visibleTodos = filterItems(todos, filter);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addItem={addItem} />
      </header>
      <section className="main">
        <TaskList todos={visibleTodos} deleteItem={deleteItem} changeStatusItem={changeStatusItem} />
        <Footer
          deleteCompletedItems={deleteCompletedItems}
          countIncompletedItem={countIncompletedItem}
          onFilterChange={onFilterChange}
          filter={filter}
        />
      </section>
    </section>
  );
};

export default App;
