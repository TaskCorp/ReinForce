import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';

// Navbar for top of page/application labeling
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
