import * as actionTypes from "./Actions";

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
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case actionTypes.POST_TASK:
      if (action.task) {
        // const newTask: NewTask = {
        //   _id: action.task._id,
        //   user_id: action.task.user_id,
        //   taskName: action.task.taskName,
        //   startTime: action.task.startTime,
        //   revisit: action.task.revisit,
        // };
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
          // if (action.task)
          // return action.task ? task.taskName !== action.task.taskName : false;

          if (!action.task) return false;
          return task._id !== action.task._id;

          // state.tasks {task1:1,task2:1,task3:2}

          // state.tasks {task3:2}

          // action.task._id = 2

          // if (!action.task) return false;
          // return task.taskName !== action.task.taskName;
        },
      );
      return {
        ...state,
        tasks: delTask,
      };

      //* Finish up UPDATE_TASKS

    case actionTypes.UPDATE_TASK:
      const tasksArray: ReadTask[] = state.tasks.slice();

      // if (Array.isArray())
      // loop through state task array
      // if _id match, then compare task object's properties
      // if there's a difference reassign it
      // return new state object

      for (let i = 0; i < tasksArray.length; i++) {
        // get _id from action (task id)
        if (!action.task) continue;

        if (action.task._id === tasksArray[i]._id) {
          tasksArray[i] = action.task;
          // for (const key in tasksArray[i]) {
          //     // if (!tasksArray[i][key] || ! action.task) continue;
          //     // if (key in action.task)
          //     tasksArray[i][key] = action.task[key];
          // }
          break;
        }
      }
      return {
        ...state,
        tasks: tasksArray,
      };

      //* Finish up the GET_TASKS reducer

    case actionTypes.GET_TASKS:
      // console.log('reducer invoked')
      const newTasks: ReadTask[] | any = action.task;
      const newState = { ...state, tasks: newTasks };
      //   console.log("NEW STATE", newState);
      return newState;
    default: {
      return state;
    }
  }
};

export default reducer;
