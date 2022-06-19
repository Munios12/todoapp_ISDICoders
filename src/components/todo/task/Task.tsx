import React from 'react';
import { iTaskModel } from '../../../models/taskModel';

export const Task = ({
  task,
  handleComplete,
  handleDelete,
}: {
  task: iTaskModel;
  handleComplete(task: iTaskModel): void;
  handleDelete(id: number): void;
}) => {
  const handleClick = () => {
    handleDelete(task.id as number);
  };
  const handleChange = () => {
    handleComplete(task);
  };

  return (
    <>
      <span>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onClick={handleChange}
        />
      </span>
      <span>{task.title}</span>
      <span> -------- </span>
      <span>{task.responsible}</span>
      <span role="button" className="button" onClick={handleClick}>
        🗑️
      </span>
    </>
  );
};
