import * as schema from '../schemas/taskSchema';

let tasks: schema.task[] = [];

export function insertNewTask(newTask: schema.task) {
  tasks.push(newTask);
  return {
    created: {
      task: newTask.task,
    },
  };
}

export function getTasks() {
  return tasks;
}

export function cleanAllTasks() {
  tasks = [];
}

export function deleteTask(deleteTask: schema.task) {
  let deletedTask: schema.task = null;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task === deleteTask.task) {
      deletedTask = tasks[i];
      tasks.splice(i, i + 1);
    }
  }
  return { deleted: deleteTask };
}
