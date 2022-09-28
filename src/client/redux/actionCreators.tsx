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


//* Create the actual fetch requests
export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}