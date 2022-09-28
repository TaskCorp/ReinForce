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
import { IconButton } from '@mui/material';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';

type Props = {
  saveTask: (task: NewTask | any) => void;
};

export const PostTask: React.FC<Props> = ({ saveTask }) => {
  const [task, setTask] = React.useState<NewTask | {}>();
  const [day, setDay] = React.useState('');
  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    saveTask(task);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  const handlePost = async () => {
    try {
      // if (!document) return;

      const rootElement: HTMLElement | null =
        document.getElementById('outlined-basic');

      if (!rootElement) throw new Error('Fail to get root element in index.ts');
      // const doc = document;

      const name = rootElement.nodeValue;

      console.log('name', name);
      console.log(rootElement.nodeValue);

      // const name: Element | null = document.querySelector('#outlined-basic').nodeValue;
      const startTime = Date.now();

      console.log(name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={addNewTask}
      className="Add-task"
      id="addTask"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="New Task" variant="outlined" />
      <TextField
        type="number"
        id="outlined-basic2"
        label="Select Time"
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel id="select-label">Date Interval</InputLabel>
        <Select
          labelId="select-label"
          // id="select-box"
          id="select-label"
          value={day}
          label="time"
          onChange={handleChange}
        >
          <MenuItem value={1}>Day(s)</MenuItem>
          <MenuItem value={7}>Week(s)</MenuItem>
          <MenuItem value={30}>Month(s)</MenuItem>
          <MenuItem value={365}>Year(s)</MenuItem>
        </Select>
      </FormControl>
      <IconButton onClick={() => handlePost()} color="primary">
        <AddIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

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
