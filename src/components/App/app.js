import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';

import './styles.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // effet sur le mount
    try {
      const tasksFromLocalStorage = localStorage.getItem('tasks');
      if (!tasksFromLocalStorage) return;
      // si on a une valeur dans le localStorage pour tasks
      const parsedTasks = JSON.parse(tasksFromLocalStorage);
      if (!Array.isArray(parsedTasks)) return;
      setTasks(parsedTasks);
    }
    // eslint-disable-next-line no-empty
    catch (err) {
      // on catch au cas où on est une erreur sur le JSON.parse
      setTasks([]); // si on a eu une erreur on met tableau vide pour être sure
    }
  }, []);

  useEffect(() => {
    // effet sur le mount ou quand tasks est modifié
    // on fait 2 effets bien distinct entre le set et le get, pour avoir un code plus propre
    const stringifiedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', stringifiedTasks);
  }, [tasks]);

  const addTask = (taskLabel) => {
    // on trouve l'id le plus grand pour générer un nouvel id
    const ids = tasks.map((task) => task.id); // [42,1,10,12]
    const maxId = Math.max(...[0, ...ids]); // on ajoute un 0 au cas où ids est vide

    setTasks((oldTasks) => [
      ...oldTasks, {
        id: maxId + 1,
        done: false,
        label: taskLabel,
      }]);
  };

  const setTaskDone = (taskId) => {
    setTasks((oldTask) => oldTask.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    // Pour les plus chauds, on aurait pu tout faire dans la callback du setState
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  };

  const undoneTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);
  const sortedTasks = [...undoneTasks, ...doneTasks];

  const undoneTasksNumber = undoneTasks.length;

  return (
    <div className="todolist">
      <Form
        onSubmitForm={addTask}
      />
      <Counter count={undoneTasksNumber} />
      <Tasks
        tasks={sortedTasks}
        setTaskDone={setTaskDone}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default App;
