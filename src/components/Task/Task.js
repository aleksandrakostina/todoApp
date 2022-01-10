import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Task = ({ todo, deleteItem, changeStatusItem }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={changeStatusItem}
        checked={todo.completed}
      />
      <label>
        <span className="description">{todo.description}</span>
        <span className="created">
          created {formatDistanceToNow(todo.created)} ago
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={deleteItem}></button>
    </div>
  );
};

export default Task;
