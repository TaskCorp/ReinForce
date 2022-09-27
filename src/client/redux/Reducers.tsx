import * as actionTypes from './Actions'

const initalState: TaskState = {
    tasks: [{
        taskName: 'Do 10 leetcode problems',
        startTime: 500,
        revisit: 300,
    }]
}

const reducer = (state: TaskState = initalState, action: TaskAction): TaskState => {
    switch (action.type) {
        case actionTypes.POST_TASK:
            const newTask: NewTask = {
                taskName: action.task.taskName,
                startTime: action.task.startTime,
                revisit: action.task.revisit,
            }
            return {
                ...state,
                tasks: state.tasks.concat(newTask),
            }
        case actionTypes.DELETE_TASK:
            const delTask: ReadTask[] = state.tasks.filter(
                task => task.taskName !== action.task.taskName
            )
            return {
                ...state,
                tasks: delTask,
            }
        case actionTypes.UPDATE_TASK:
            
    }
    return state;
}

export default reducer;