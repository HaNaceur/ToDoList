import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // https://www.npmjs.com/package/classnames
import { Trash2 } from 'react-feather';
import DOMPurify from 'dompurify';

import './style.scss';

function Task({
  id,
  label,
  done,
  onChangeDone,
  onDelete,
}) {
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsNew(false);
    }, 5000);
  }, []);

  return (
    <li className={classnames('task', { 'task--done': done, 'task--new': isNew })}>
      <div className="task__text">
        <input
          type="checkbox"
          className="task__checkbox"
          id={id}
          checked={done}
          onChange={() => onChangeDone(id)}
        />
        <label
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(label) }}
        />
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
