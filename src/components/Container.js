import React from 'react';
import NavDrawer from './Drawer';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  FormControlLabel,
  Switch
} from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';

const Container = ({ children }) => {

  return (
    <>
      <CssBaseline />
      <AppBar
        color='primary'
        sx={{
          position: 'fixed',
          width: '100%'
        }}
      >
        <Toolbar
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <h3>Cities of the World</h3>
          <div>
            <NavDrawer />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Container;