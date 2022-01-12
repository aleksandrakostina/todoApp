import React from "react";
import TasksFilter from "../TasksFilter";
import PropTypes from "prop-types";
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

Footer.defaultProps = {
  filter: "all",
  deleteCompletedItems: () => {},
  onFilterChange: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  deleteCompletedItems: PropTypes.func,
  countIncompletedItem: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func,
};

export default Footer;
