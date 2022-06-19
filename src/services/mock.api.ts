import { iTaskModel, Task } from '../models/taskModel';

export const getTasks = async () => {
  const tasks: Array<iTaskModel> = [
    new Task('Hacer el header', 'Maria'),
    new Task('Hacer el main', 'Javier'),
    new Task('Hacer el footer', 'Joan'),
  ];

  tasks[0].isCompleted = true;

  return tasks;
};
