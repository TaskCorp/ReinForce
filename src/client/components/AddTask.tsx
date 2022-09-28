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
         <form onSubmit={addNewTask} className="Add-task" id="addTask">
             <input
             type="text"
             id="title"
             placeholder='TaskName'
             onChange={handleTaskData} 
             />
             <input
             type="text"
             id="title"
             placeholder='Interval'
             onChange={handleTaskData}
             />
             <button id="add-button" disabled={ task === undefined ? true : false }>
                 Add Task
             </button>
         </form>
     )
 }
  