export function createValidTask() {
  return {
    task: 'This is a task',
  };
}

export function createInvalidTask() {
  return {
    invalidTask: 'This is a invalid task',
  };
}

export function createEditedTask() {
  return {
    oldTask: 'This is a task',
    newTask: 'This is an edited task',
  };
}
