import { iTaskModel } from '../models/taskModel';

export class HttpStoreTasks {
  url: string;
  constructor() {
    this.url = 'http://localhost:3545/tasks';
  }

  getTasks(): Promise<Array<iTaskModel>> {
    // GET
    return fetch(this.url).then((resp) => {
      console.log(resp.status);
      return resp.json();
    });
  }

  getAllTask(task: iTaskModel): Promise<iTaskModel> {
    // GET
    return fetch(this.url).then((resp) => resp.json());
  }

  setTask(task: iTaskModel): Promise<iTaskModel> {
    // POST
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  updateTask(task: iTaskModel): Promise<Partial<iTaskModel>> {
    // PUT / PATCH
    return fetch(this.url + `/${task.id}`, {
      method: 'PATCH',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  deleteTask(id: string): Promise<number> {
    // DELETE
    return fetch(this.url + `/${id}`, {
      method: 'DELETE',
    }).then((response) => response.status);
  }
}
