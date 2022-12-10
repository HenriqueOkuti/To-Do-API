import * as schema from '../schemas/taskSchema';

const tasks: Object[] = [];

export function insertNewTask(newTask: schema.task) {
  tasks.push(newTask);
  return {
    created: {
      task: newTask.task,
    },
  };
}
