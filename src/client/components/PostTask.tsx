/**
 ** The addTask component will house the following
 ** (1) - Box to enter description of task and a interval they can select from
 ** (2) - add button that will add the typed in task to the taskList component.
 */
import * as React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as styles from './PostTaskStyles';

function PostTask ({ postTask }: PostTaskProps) {

  const [name, setName] = React.useState('');
  const [time, setTime] = React.useState('');
  const [interval, setInterval] = React.useState('');

  // Function to handle post request
  const handlePostTask = async () => {
    try {
      const currDate = String(Date.now());
      const revisitInterval = String(1000 * 60 * 60 * 24 * (Number(interval) * Number(time)));
      const postOptions = {
        method: 'POST',
        body: JSON.stringify({
          start_time: currDate,
          name,
          revisit_interval: revisitInterval,
          users_id: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(`/api/postTask`, postOptions);
      postTask({ start_time: currDate, name, revisit_interval: revisitInterval, users_id: 1});
      setName('');
      setTime('');
      setInterval('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container
      className="Add-task"
      id="addTask"
      sx={ styles.barWrapper }
    >
      <TextField
        id="outlined-basic"
        required
        label="New Task"
        variant="outlined"
        value={name}
        sx={{...styles.barText}}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        type="number"
        required
        id="outlined-basic2"
        label="Select Time"
        variant="outlined"
        value={time}
        sx={styles.barText}
        onChange={e => setTime(e.target.value)}
      />
      <FormControl required fullWidth sx={styles.barText}>
        <InputLabel id="select-label">Date Interval</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={interval}
          onChange={e => setInterval(e.target.value)}
        >
          <MenuItem value={1}>Day(s)</MenuItem>
          <MenuItem value={7}>Week(s)</MenuItem>
          <MenuItem value={30}>Month(s)</MenuItem>
          <MenuItem value={365}>Year(s)</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        onClick={() => handlePostTask()}
        color="primary"
        sx={{ ...styles.barButton, width: '50px' }}
        disabled={!time || !name || !interval}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default PostTask;