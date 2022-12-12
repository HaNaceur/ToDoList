import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

function Tasks({ tasks, setTaskDone }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          onChangeDone={() => setTaskDone(task.id)}
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
};

export default Tasks;
