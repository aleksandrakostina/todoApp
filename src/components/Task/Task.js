import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import Timer from '../Timer/Timer';

const Task = ({ todo, deleteItem, changeStatusItem, upadateTime, timerId, setTimerId }) => {
  const isCurrentTimer = timerId === todo.id;
  const formatedTime = format(new Date(todo.time * 1000), 'mm:ss');

  const onPlayTimer = () => {
    if(!todo.completed) {
      setTimerId(todo.id);
    }
  }

  const onPauseTimer = () => {
    if(isCurrentTimer) {
      setTimerId(null);
    }
  }

  return (
  <div className="view">
    <input className="toggle" type="checkbox" onChange={() => changeStatusItem(todo.id)} checked={todo.completed} />
    <label>
      <span className="title">{todo.description}</span>
      <span className="description">
        <button className="icon icon-play" type='button' onClick={onPlayTimer} aria-label='play' />
        <button className="icon icon-pause" type='button' onClick={onPauseTimer} aria-label='pause' />
        {isCurrentTimer ? <Timer upadateTime={upadateTime} id={todo.id} time={todo.time}  /> : formatedTime}
      </span>
      <span className="description">created {formatDistanceToNow(todo.created)} ago</span>
    </label>
    <button className="icon icon-edit" type="button" aria-label="Edit" />
    <button className="icon icon-destroy" type="button" onClick={() => deleteItem(todo.id)} aria-label="Delete" />
  </div>
)
}

Task.defaultProps = {
  deleteItem: () => {},
  changeStatusItem: () => {},
  upadateTime: () => {},
  setTimerId: () => {}, 
  timerId: null,
};

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date),
    completed: PropTypes.bool.isRequired,
    time: PropTypes.number,
  }).isRequired,
  deleteItem: PropTypes.func,
  changeStatusItem: PropTypes.func,
  upadateTime: PropTypes.func,
  timerId: PropTypes.number,
  setTimerId: PropTypes.func,
};

export default Task;
