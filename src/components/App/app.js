import React from 'react';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';
import tasksData from '../../data/tasks';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksData,
    };
  }

  addTask = (taskLabel) => {
    const { tasks } = this.state;
    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);

    const newTask = {
      id: maxId + 1,
      done: false,
      label: taskLabel,
    };

    const newTasks = [...tasks, newTask];

    this.setState({
      tasks: newTasks,
    });
  };

  setTaskDone = (taskId) => {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { tasks } = this.state;
    const undoneTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    const sortedTasks = [...undoneTasks, ...doneTasks];

    const undoneTasksNumber = undoneTasks.length;

    return (
      <div className="todolist">
        <Form
          onSubmitForm={this.addTask}
        />
        <Counter count={undoneTasksNumber} />
        <Tasks
          tasks={sortedTasks}
          setTaskDone={this.setTaskDone}
        />
      </div>
    );
  }
}

export default App;
