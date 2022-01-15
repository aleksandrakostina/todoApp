import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';
import './Footer.css';

const Footer = ({ deleteCompletedItems, countIncompletedItem, onFilterChange, filter }) => (
  <footer className="footer">
    <span className="todo-count">{countIncompletedItem} items left</span>
    <TasksFilter onFilterChange={onFilterChange} filter={filter} />
    <button className="clear-completed" type="button" onClick={deleteCompletedItems}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  filter: 'all',
  deleteCompletedItems: () => {},
  onFilterChange: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string,
  deleteCompletedItems: PropTypes.func,
  countIncompletedItem: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func,
};

export default Footer;
