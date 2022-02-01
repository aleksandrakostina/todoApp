import React, { Component } from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

class Timer extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const {upadateTime, id, time} = this.props;
    upadateTime(id, time + 1);
  }

  render() {
    const {time} = this.props;

    return (
      <>
        {format(new Date(time * 1000), 'mm:ss')}
      </>
    )
  }
}

Timer.defaultProps = {
  time: 0,
  upadateTime: () => {},
};

Timer.propTypes = {
  time: PropTypes.number,
  id: PropTypes.number.isRequired,
  upadateTime: PropTypes.func,
};

export default Timer;