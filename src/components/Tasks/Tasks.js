import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

function Tasks({ tasks, setTaskDone, deleteTask }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          onChangeDone={setTaskDone}
          onDelete={deleteTask}
          {...task}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setTaskDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default React.memo(Tasks);
