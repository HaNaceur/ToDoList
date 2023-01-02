import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Counter({ count }) {
  let text = 'No task in progress';

  if (count === 1) {
    text = `${count} task in progress`;
  }
  else if (count > 1) {
    text = `${count} tasks in progress`;
  }

  return (
    <p className="counter">{text}</p>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
};

Counter.defaultProps = {
  count: 0,
};

export default React.memo(Counter);
