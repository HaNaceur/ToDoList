import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // https://www.npmjs.com/package/classnames
import './styles.scss';

function Task({
  id,
  label,
  done,
  onChangeDone,
}) {
  // classnames est un petit outil qui permet de créer des classNames propre super simplement et proprement
  // meme lorsqu'il y a des conditions
  return (
    <li className={classnames('task', { 'task--done': done })}>
      <input
        type="checkbox"
        className="task__checkbox"
        id={id}
        checked={done}
        onChange={onChangeDone}
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChangeDone: PropTypes.func.isRequired,
};

export default Task;
