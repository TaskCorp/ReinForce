import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as styles from './TaskStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { IconButton } from "@mui/material";

function Task(
  { _id, users_id, name, start_time, revisit_interval, postTask, deleteTask, updateTask }: TaskProps,
) {

  const [newTaskName, setNewTaskName] = useState(name);
  const [newStartTime, setNewStartTime] = useState(start_time);

  const handleSync = () => {
    // updateTask(new ReadTask({_id, users_id, }))
    updateTask({_id, users_id, name: newTaskName, start_time: newStartTime, revisit_interval});
  };

  const handleTimeUpdate = () => {
    setNewStartTime(Number(Date.now()));
    handleSync();
  }

  return (
    <Container sx={styles.barWrapper} className="barWrapper">
      <Button sx={{...styles.barButton, width: '150px'}} variant="outlined" color="success" onClick={handleTimeUpdate}>{Number(Date.now()) - Number(start_time)}/{revisit_interval} Days</Button>
      <TextField sx={styles.barText} label="TaskName" variant="outlined" onChange={e => setNewTaskName(e.target.value)} value={newTaskName}/>
      <IconButton disabled={newTaskName === name} sx={{...styles.barButton, width: '50px'}} color="default" onClick={handleSync}>
        <CloudSyncIcon/>
      </IconButton>
      <IconButton sx={{...styles.barButton, width: '50px'}} color="error">
        <DeleteIcon/>
      </IconButton>
    </Container>
  );
}

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