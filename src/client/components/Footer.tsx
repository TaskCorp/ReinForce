import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// Footer for aesthetics
export default function Footer() {
  return (
    <div id="Footer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar />
        </AppBar>
      </Box>
    </div>
  );
}
