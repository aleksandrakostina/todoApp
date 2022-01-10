import React from "react";
import Task from "../Task";
import "./TaskList.css";

const TaskList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const { id, ...todoItem } = todo;

        return (
          <li key={id} className={todoItem.completed ? "completed" : ""}>
            <Task todo={todoItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
