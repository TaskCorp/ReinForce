import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ListAltIcon sx={{marginRight: '20px'}} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReinForce
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
