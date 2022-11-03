import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as styles from './TaskStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { IconButton } from '@mui/material';

// The task component is the component used for displaying user tasks
function Task({
  _id,
  users_id,
  name,
  start_time,
  revisit_interval,
  deleteTask,
  updateTask,
}: TaskProps) {
  // State to hold current task name
  const [newTaskName, setNewTaskName] = useState(name);

  const handleUpdateTime = async () => {
    const newDate = String(Date.now());
    await handleUpdateTask(newDate);
  }

  const handleUpdateTask = async (newStartTime = start_time) => {
    
    const updateOptions = {
      method: 'PATCH',
      body: JSON.stringify({ users_id, start_time: newStartTime, name: newTaskName, revisit_interval }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(`/api/updateTask/${_id}`, updateOptions);
    updateTask({ _id, users_id, start_time: newStartTime, name: newTaskName, revisit_interval });
  }

  const handleDeleteTask = async () => {
    try {
      const deleteOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(`/api/deleteTask/${_id}`, deleteOptions);
      deleteTask({ _id, users_id, start_time, name, revisit_interval });
    } catch (error) {
      console.log('DeleteTask Error: ', error);
    }
  };

  // Returns necessary color of box
  function boxColor() {
    const dateFrac = (Number(Date.now()) - Number(start_time)) / Number(revisit_interval);
    if (dateFrac >= 1) return "error";
    if (dateFrac >= .5) return "warning";
    else return "success";
  }

  // If name state value doesn't match new task name when it updates, newTaskName is updated.
  React.useEffect(() => {
    if (name != newTaskName) setNewTaskName(name);
  }, [name]);

  return (
    <Container sx={styles.barWrapper} className="barWrapper">
      <Button
        sx={{ ...styles.barButton, width: '150px' }}
        variant="outlined"
        color={boxColor()}
        onClick={handleUpdateTime}
      >
        {Math.floor((Number(Date.now()) - Number(start_time)) / 86400000)}/
        {Math.floor(Number(revisit_interval) / 86400000)} Days
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
        onClick={() => handleUpdateTask()}
      >
        <CloudSyncIcon />
      </IconButton>
      <IconButton
        onClick={() => handleDeleteTask()}
        sx={{ ...styles.barButton, width: '50px' }}
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </Container>
  );
}

export default Task;
