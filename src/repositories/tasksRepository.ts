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

export function editTask(oldTask: schema.task, newTask: schema.task) {
  let editedTask: schema.task = null;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task === oldTask.task) {
      editedTask = tasks[i];
      tasks[i] = newTask;
    }
  }
  return { edited: editedTask.task };
}
