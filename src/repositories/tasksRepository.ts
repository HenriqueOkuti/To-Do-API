import * as schema from '../schemas/taskSchema';

let tasks: Object[] = [];

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
