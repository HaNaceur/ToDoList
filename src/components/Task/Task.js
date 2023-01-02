import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // https://www.npmjs.com/package/classnames
import { Trash2 } from 'react-feather';
import DOMPurify from 'dompurify';

import './styles.scss';

function Task({
  id,
  label,
  done,
  onChangeDone,
  onDelete,
}) {
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsNew(false);
      console.log({
        isNew, setIsNew, done, id, label,
      });
    }, 5000);
    // attention si le composant disparait avant que le setTimeout ne se produise on aura une fuite de memoire,
    // car le timeout tiendra toujours une relation avec le composant, et celui même non affiché, ne sera pas supprimé de la RAM
    return () => {
      // donc on fait une fonction de nettoyage pour supprimer le timeout
      clearTimeout(timeoutId);
      console.log('clearTimeout');
    };
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