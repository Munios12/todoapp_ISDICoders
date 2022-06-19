import { iTaskModel } from '../models/taskModel';

const url = 'http://localhost:3545/tasks';

// export function getTasks(): Promise<Array<iTaskModel>> {
//     // GET
//     return fetch(url).then((resp) => {
//       console.log(resp.status);
//       return resp.json();
//     });
//   }

export function getAllTask() {
  // GET
  return fetch(url).then((resp) => resp.json());
}

export function addTask(task: iTaskModel): Promise<iTaskModel> {
  // POST
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export function updateTask(task: iTaskModel): Promise<iTaskModel> {
  // PUT / PATCH
  return fetch(url + `/${task.id}`, {
    method: 'PATCH',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export function deleteTask(id: number): Promise<Response> {
  // DELETE
  return fetch(url + `/${id}`, {
    method: 'DELETE',
  }).then((response) => response);
}
