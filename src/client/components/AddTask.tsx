/**
 ** The addTask component will house the following
 ** (1) - Box to enter description of task and a interval they can select from
 ** (2) - add button that will add the typed in task to the taskList component.
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


 type Props = { 
    saveTask: (task: NewTask | any) => void
}
 
 
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
     const BasicSelect = () => {
        const [day, setDay] = React.useState('');

     const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as string);
     }
    
        
        
    return (
    <form onSubmit={addNewTask} className="Add-task" id="addTask">
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel id="input-label">Days</InputLabel>
        <Select
            labelId="select-label"
            id="select-box"
            value={day}
            label="Days"
            onChange={handleChange}
        >
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={14}>Fourteen</MenuItem>
            <MenuItem value={21}>Twenty One</MenuItem>
        </Select>
      </Box>
    </form>
          );
    }
 }
 

  //  <form onSubmit={addNewTask} className="Add-task" id="addTask">
        //      <input
        //      type="text"
        //      id="title"
        //      placeholder='TaskName'
        //      onChange={handleTaskData} 
        //      />
        //      <input
        //      type="text"
        //      id="title"
        //      placeholder='Interval'
        //      onChange={handleTaskData}
        //      />
        //      <button id="add-button" disabled={ task === undefined ? true : false }>
        //          Add Task
        //      </button>
        //  </form>