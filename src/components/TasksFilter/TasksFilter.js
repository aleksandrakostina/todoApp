import React from "react";
import "./TasksFilter.css";

const TasksFilter = ({ filter, onFilterChange }) => {
  const filterButtons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  const itemsFilter = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = isActive ? "selected" : "";

    return (
      <li key={name}>
        <button
          type="button"
          onClick={() => onFilterChange(name)}
          className={classNames}
        >
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{itemsFilter}</ul>;
};

export default TasksFilter;
