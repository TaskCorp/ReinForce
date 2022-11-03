import * as actionTypes from './Actions';

// Actions for interacting with task data
export function postTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.POST_TASK,
    task,
  };
  return action;
}

export function deleteTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.DELETE_TASK,
    task,
  };
  return action;
}

export function updateTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    task,
  };
  return action;
}

export function getTasks(tasks: ReadTask[]) {
  const action: TasksAction = {
    type: actionTypes.GET_TASKS,
    task: tasks,
  };
  return action;
}
