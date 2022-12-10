import * as repository from '../repositories/index';
import * as schema from '../schemas/taskSchema';

export function createTask(newTask: schema.task) {
  return repository.insertNewTask(newTask);
}

export function findTasks() {
  return repository.getTasks();
}

export function deleteTask(task: schema.task) {
  return repository.deleteTask(task);
}
