import * as actionTypes from "./Actions"

export function postTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.POST_TASK,
    task,
  }
  return simulateHttpRequest(action)
}

export function deleteTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.DELETE_TASK,
    task,
  }
  return simulateHttpRequest(action)
}


export function updateTask(task: ReadTask) {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    task,
  }
  return simulateHttpRequest(action)
}

export function getTasks() {
  const action: TaskAction = {
    type: actionTypes.GET_TASKS,
    task: null,
  }
  return simulateHttpRequest(action)
}

// export const UPDATE_TASK = "UPDATE_TASK";
// export const GET_TASK = "GET_TASK";
export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}