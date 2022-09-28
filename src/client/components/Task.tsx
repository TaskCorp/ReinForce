import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as styles from './TaskStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { IconButton } from '@mui/material';
import { getTasks } from '../redux/actionCreators';

function Task({
  _id,
  users_id,
  name,
  start_time,
  revisit_interval,
  getTasks,
  postTask,
  deleteTask,
  updateTask,
}: TaskProps) {
  const [newTaskName, setNewTaskName] = useState(name);
  const [newStartTime, setNewStartTime] = useState(start_time);

  const handleSync = () => {
    // updateTask(new ReadTask({_id, users_id, }))
    // try {

    updateTask({
      _id,
      users_id,
      name: newTaskName,
      start_time: newStartTime,
      revisit_interval,
    });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleTimeUpdate = () => {
    setNewStartTime(Number(Date.now()));
    handleSync();
  };

  const handleDelete = async () => {
    try {
      const deleteOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(`/api/deleteTask/${_id}`, deleteOptions);
      deleteTask({ _id, users_id, start_time, name, revisit_interval });

      const getOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch('/api/getTask', getOptions);
      const data = await response.json();
      console.log('DATA!!', data);
      getTasks(data);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={styles.barWrapper} className="barWrapper">
      <Button
        sx={{ ...styles.barButton, width: '150px' }}
        variant="outlined"
        color="success"
        onClick={handleTimeUpdate}
      >
        {Math.floor((Number(Date.now()) - Number(start_time)) / 86400000)}/
        {Math.floor(revisit_interval / 86400000)} Days
      </Button>
      <TextField
        sx={styles.barText}
        label="Task Name"
        variant="outlined"
        onChange={e => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <IconButton
        disabled={newTaskName === name}
        sx={{ ...styles.barButton, width: '50px' }}
        color="default"
        onClick={() => updateTask()}
      >
        <CloudSyncIcon />
      </IconButton>
      <IconButton
        onClick={() => handleDelete()}
        sx={{ ...styles.barButton, width: '50px' }}
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </Container>
  );
}

/*
  _id,
  users_id,
  name,
  start_time,
  revisit_interval,
*/

export default Task;

// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import * as styles from './TaskStyles';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CloudSyncIcon from '@mui/icons-material/CloudSync';
// import { IconButton } from "@mui/material";

// function Task() {

//   const [taskName, setTaskName] = useState('default');
//   const [newTaskName, setNewTaskName] = useState(taskName);

//   return (
// <Container sx={styles.barWrapper} className="barWrapper">
//   <Button sx={{...styles.barButton, width: '150px'}} variant="outlined" color="success">0/14 Days</Button>
//   <TextField sx={styles.barText} label="TaskName" variant="outlined" onChange={e => setNewTaskName(e.target.value)} value={newTaskName}/>
//   <IconButton disabled={newTaskName === taskName} sx={{...styles.barButton, width: '50px'}} color="default">
//     <CloudSyncIcon/>
//   </IconButton>
//   <IconButton sx={{...styles.barButton, width: '50px'}} color="error">
//     <DeleteIcon/>
//   </IconButton>
// </Container>
//   );
// }

// export default Task;
