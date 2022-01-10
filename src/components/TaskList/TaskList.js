import React from "react";
import Task from "../Task";
import "./TaskList.css";

const TaskList = ({ todos, deleteItem, changeStatusItem }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const { id, ...todoItem } = todo;

        return (
          <li key={id} className={todoItem.completed ? "completed" : ""}>
            <Task
              todo={todoItem}
              deleteItem={() => deleteItem(id)}
              changeStatusItem={() => changeStatusItem(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
