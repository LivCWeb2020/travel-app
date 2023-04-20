import React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  FormControlLabel,
  Switch
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar } from '@mui/material';
import Drawer from './Drawer';
import { toggleTheme } from '../redux/slices/ui';
import { DarkMode, LightMode } from '@mui/icons-material';

const Container = ({ children }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.ui.value);
  const theme = createTheme({

    palette: {
      mode: themeMode,
      primary: {
        main: '#085879'
      },
      secondary: {
        main: '#ffffff'
      },
      typography: {
        fontFamily: ['Open Sans, Montserrat', 'sans-serif'].join(',')
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
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
            <FormControlLabel
              control={
                <Switch
                  checked={themeMode === 'dark' ? true : false}
                  onChange={() => {
                    dispatch(toggleTheme())
                  }}
                />
              }
              label={themeMode === 'dark' ? <DarkMode /> : <LightMode />}
            />
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  )
}

export default Container;