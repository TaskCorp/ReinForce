import * as actionTypes from './Actions'

const initalState: TaskState = {
    // tasks: [{
    //     _id: 0,
    //     user_id: 1,
    //     taskName: 'Do 10 leetcode problems',
    //     startTime: 500,
    //     revisit: 300,
    // }]
    tasks: []
}

const reducer = (state: TaskState = initalState, action: TaskAction): TaskState => {
    switch (action.type) {
        case actionTypes.POST_TASK:
            if (action.task) {
                const newTask: NewTask = {
                    _id: action.task._id,
                    user_id: action.task.user_id,
                    taskName: action.task.taskName,
                    startTime: action.task.startTime,
                    revisit: action.task.revisit,
                }
                return {
                    ...state, 
                    tasks: state.tasks.concat(newTask),
                }
            }
        case actionTypes.DELETE_TASK:
                const delTask: ReadTask[] = state.tasks.filter(
                    (task: ReadTask): Boolean  => {
                        // if (action.task) 
                            // return action.task ? task.taskName !== action.task.taskName : false;

                        if (!action.task) return false;
                        return task.taskName !== action.task.taskName;

                        // if (!action.task) return false;
                        // return task.taskName !== action.task.taskName;
                    }
                )
                return {
                    ...state,
                    tasks: delTask,
                }
            
            //* Finish up UPDATE_TASKS
        case actionTypes.UPDATE_TASK:
            //* Finish up the GET_TASKS reducer
        
        case actionTypes.GET_TASKS:
            
    }
    return state;
}

export default reducer;