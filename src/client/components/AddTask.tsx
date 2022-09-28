/**
 ** The addTask component will house the following
 ** (1) - Box to enter description of task and a interval they can select from
 ** (2) - add button that will add the typed in task to the taskList component.
 */
import * as React from 'react'

type Props = { saveTask: (task: NewTask | any) => void}


export const PostTask: React.FC<Props> = ({ saveTask }) => {
    const [task, setTask] = React.useState<NewTask | {}>()

    const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }
    const addNewTask = (e: React.FormEvent) => {
        e.preventDefault()
        saveTask(task)
    }

    return (
        <form onSubmit={addNewTask} className="Add-task">
            <input
            type="text"
            id="title"
            placeholder='TaskName'
            onChange={handleTaskData} 
            />
            <input
            type="text"
            id="body"
            placeholder='Interval'
            onChange={handleTaskData}
            />
            <button disabled={ task === undefined ? true : false }>
                Add Task
            </button>
            <button
                class ="p-0 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
        </form>
    )
}

 