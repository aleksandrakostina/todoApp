import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, deleteItem, changeStatusItem }) => (
  <ul className="todo-list">
    {todos.map((todo) => {
      const { id, ...todoItem } = todo;

      return (
        <li key={id} className={todoItem.completed ? 'completed' : ''}>
          <Task todo={todo} deleteItem={deleteItem} changeStatusItem={changeStatusItem} />
        </li>
      );
    })}
  </ul>
);

TaskList.defaultProps = {
  todos: [],
  deleteItem: () => {},
  changeStatusItem: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func,
  changeStatusItem: PropTypes.func,
};

export default TaskList;
