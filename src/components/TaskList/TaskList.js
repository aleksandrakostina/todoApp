import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, deleteItem, changeStatusItem, upadateTime, timerId, setTimerId }) => (
  <ul className="todo-list">
    {todos.map((todo) => {
      const { id, ...todoItem } = todo;

      return (
        <li key={id} className={todoItem.completed ? 'completed' : ''}>
          <Task todo={todo} deleteItem={deleteItem} changeStatusItem={changeStatusItem} upadateTime={upadateTime} timerId={timerId} setTimerId={setTimerId} />
        </li>
      );
    })}
  </ul>
);

TaskList.defaultProps = {
  todos: [],
  deleteItem: () => {},
  changeStatusItem: () => {},
  upadateTime: () => {},
  setTimerId: () => {},
  timerId: null
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func,
  changeStatusItem: PropTypes.func,
  upadateTime: PropTypes.func,
  timerId: PropTypes.number,
  setTimerId: PropTypes.func
};

export default TaskList;
