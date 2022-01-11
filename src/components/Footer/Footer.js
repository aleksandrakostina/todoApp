import React from "react";
import TasksFilter from "../TasksFilter";
import "./Footer.css";

const Footer = ({
  deleteCompletedItems,
  countIncompletedItem,
  onFilterChange,
  filter,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{countIncompletedItem} items left</span>
      <TasksFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={deleteCompletedItems}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
