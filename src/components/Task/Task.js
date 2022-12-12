import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // https://www.npmjs.com/package/classnames
import { Trash2 } from 'react-feather';
import './styles.scss';

function Task({
  id,
  label,
  done,
  onChangeDone,
  onDelete,
}) {
  // classnames est un petit outil qui permet de créer des classNames propre super simplement et proprement
  // meme lorsqu'il y a des conditions
  return (
    <li className={classnames('task', { 'task--done': done })}>
      <div>
        <input
          type="checkbox"
          className="task__checkbox"
          id={id}
          checked={done}
          onChange={() => onChangeDone(id)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <button
        type="button"
        className="task__btn-delete"
        onClick={() => onDelete(id)}
      >
        <Trash2 />
      </button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChangeDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default React.memo(Task);
