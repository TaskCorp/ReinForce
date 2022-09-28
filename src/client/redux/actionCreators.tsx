import * as actionTypes from "./Actions";

// export function postTask(task: ReadTask) {
//   const action: TaskAction = {
//     type: actionTypes.POST_TASK,
//     task,
//   }
//   return simulateHttpRequest(action)
// }
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
  // console.log("ACTION CREATOR INVOKED");
  const action: TasksAction = {
    type: actionTypes.GET_TASKS,
    task: tasks,
  };
  return action;
}

//* Create the actual fetch requests
// export function simulateHttpRequest(action: TaskAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }
