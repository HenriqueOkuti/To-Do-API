import * as repository from '../repositories/index';
import * as schema from '../schemas/taskSchema';

export function createTask(newTask: schema.task) {
  return repository.insertNewTask(newTask);
}
