import * as actionTypes from './Actions';

const initalState: TaskState = {
  // tasks: [{
  //     _id: 0,
  //     user_id: 1,
  //     taskName: 'Do 10 leetcode problems',
  //     startTime: 500,
  //     revisit: 300,
  // }]
  tasks: [],
};

const reducer = (
  state: TaskState = initalState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case actionTypes.POST_TASK:
      if (action.task) {
        const newTask: ReadTask = {
          _id: action.task._id,
          users_id: action.task.users_id,
          name: action.task.name,
          start_time: action.task.start_time,
          revisit_interval: action.task.revisit_interval,
        };
        return {
          ...state,
          tasks: state.tasks.concat(newTask),
        };
      }
    case actionTypes.DELETE_TASK:
      const delTask: ReadTask[] = state.tasks.filter(
        (task: ReadTask): Boolean => {
          if (!action.task) return false;
          return task._id !== action.task._id;
        }
      );
      return {
        ...state,
        tasks: delTask,
      };

    case actionTypes.UPDATE_TASK:
      const tasksArray: ReadTask[] = state.tasks.slice();

      // if (Array.isArray())
      // loop through state task array
      // if _id match, then compare task object's properties
      // if there's a difference reassign it
      // return new state object

      for (let i = 0; i < tasksArray.length; i++) {
        if (!action.task) continue;

        if (action.task._id === tasksArray[i]._id) {
          tasksArray[i] = action.task;
          break;
        }
      }
      return {
        ...state,
        tasks: tasksArray,
      };

    case actionTypes.GET_TASKS:
      const newTasks: ReadTask[] | any = action.task;
      const newState = { ...state, tasks: newTasks };
      return newState;
    default: {
      return state;
    }
  }
};

export default reducer;
