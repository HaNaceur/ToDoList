import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Counter({ count }) {
  let text = 'Aucune tâche en cours';

  if (count === 1) {
    text = `${count} tâche en cours`;
  }
  else if (count > 1) {
    text = `${count} tâches en cours`;
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
