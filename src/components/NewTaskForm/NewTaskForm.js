import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ addItem }) => {
  const [value, setValue] = useState('');

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addItem(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input className="new-todo" placeholder="What needs to be done?" value={value} onChange={onChangeValue} />
    </form>
  );
};

NewTaskForm.defaultProps = {
  addItem: () => {},
};

NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};

export default NewTaskForm;
