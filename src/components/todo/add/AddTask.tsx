import { SyntheticEvent, useState } from 'react';
import { iTaskModel } from '../../../models/taskModel';

export const AddTask = ({
  handleAdd,
}: {
  handleAdd(task: iTaskModel): void;
}) => {
  const initialFormState: Partial<iTaskModel> = {
    title: '',
    responsible: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    // const task = new Task(
    //   formState.title as string,
    //   formState.responsible as string
    // );

    handleAdd({
      title: formState.title as string,
      responsible: formState.responsible as string,
      isCompleted: false,
    });
  };

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setFormState({ ...formState, [element.name]: element.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Describe la tarea"
          required
        />

        <input
          type="text"
          name="responsible"
          value={formState.responsible}
          onChange={handleChange}
          placeholder="Responsabe de la tarea"
          required
        />

        <button type="submit">Guardar</button>
      </form>
    </>
  );
};
