import React from 'react';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';
import tasksData from '../../data/tasks';

import './styles.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksData,
    };
  }

  addTask = (taskLabel) => {
    const { tasks } = this.state;
    // on trouve l'id le plus grand pour générer un nouvel id
    const ids = tasks.map((task) => task.id); // [42,1,10,12]
    const maxId = Math.max(...[0, ids]); // on ajoute un 0 au cas où ids est vide

    const newTask = {
      id: maxId + 1,
      done: false,
      label: taskLabel,
    };

    const newTasks = [...tasks, newTask];
    this.setState({
      tasks: newTasks,
    });

    // ou
    // this.setState(({ tasks }) => ({
    //   tasks: [
    //     ...tasks, {
    //       id: maxId + 1,
    //       done: false,
    //       label: taskLabel,
    //     }],
    // }));
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

    // ou
    // this.setState(({tasks}) => ({
    //   tasks: tasks.map((task) => {
    //     if (task.id === taskId) {
    //       return {
    //         ...task,
    //         done: !task.done,
    //       };
    //     }
    //     return task;
    //   }),
    // }));
  };

  deleteTask = (id) => {
    // on recupere le tableau task du state
    const { tasks } = this.state;

    // on clone le tableau tasks en supprimant la tache ayant l'id passé en parametre
    const newTasks = tasks.filter((task) => {
      if (task.id === id) {
        // on a trouvé la tache à supprimer, on return false, pour l'enlever du nouveau tableau
        return false;
      }
      return true;

      // ou juste return task.id !== id
    });

    // et on modifie le state avec le nouveau tableau cloné (immutabilité)
    this.setState({
      tasks: newTasks,
    });

    // Pour les plus chauds, on aurait pu tout faire dans la callback du setState
    // this.setState((oldState) => ({
    //   tasks: oldState.tasks.filter((task) => task.id !== id),
    // }));
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
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
