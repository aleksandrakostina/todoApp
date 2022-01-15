import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Task = ({ todo, deleteItem, changeStatusItem }) => (
  <div className="view">
    <input className="toggle" type="checkbox" onChange={changeStatusItem} checked={todo.completed} />
    <label>
      <span className="description">{todo.description}</span>
      <span className="created">created {formatDistanceToNow(todo.created)} ago</span>
    </label>
    <button className="icon icon-edit" type="button" aria-label="Edit" />
    <button className="icon icon-destroy" type="button" onClick={deleteItem} aria-label="Delete" />
  </div>
);

Task.defaultProps = {
  deleteItem: () => {},
  changeStatusItem: () => {},
};

Task.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date),
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func,
  changeStatusItem: PropTypes.func,
};

export default Task;
