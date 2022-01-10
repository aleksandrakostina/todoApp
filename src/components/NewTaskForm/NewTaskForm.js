import React from "react";
import "./NewTaskForm.css";

const NewTaskForm = () => {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      defaultValue=""
    />
  );
};

export default NewTaskForm;
