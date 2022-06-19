import React, { useEffect, useState } from 'react';
import { iTaskModel } from '../../../models/taskModel';
import * as api from '../../../services/http-tasks';
import { AddTask } from '../add/AddTask';
import { Task } from '../task/Task';

export const TaskList = () => {
  // Model
  const initialState: Array<iTaskModel> = [];
  const [tasks, setTasks] = useState(initialState); // La posicion 2 en la array es un Setter
  const [loading, setLoading] = useState(false);

  //Controller
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      api.getAllTask().then((data) => {
        setTasks(data);
        setLoading(false);
      });
    }, 500);
  }, []);

  const handleAdd = (task: iTaskModel) => {
    //Backend
    api.addTask(task).then((data) =>
      //estado
      setTasks([...tasks, data])
    );
  };

  const handleDelete = (id: number) => {
    api.deleteTask(id).then((resp) => {
      if (resp.ok) {
        setTasks(tasks.filter((item) => item.id !== id));
      }
    });
  };

  const handleComplete = (task: iTaskModel) => {
    task.isCompleted = !task.isCompleted;
    api.updateTask(task).then((data) => {
      setTasks(tasks.map((item) => (item.id === task.id ? data : item)));
    });
  };

  return (
    // View
    <>
      <h3>My Task List</h3>
      <AddTask handleAdd={handleAdd} />
      {loading && <p>Cargando Tareas...</p>}
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <Task
              task={item}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
