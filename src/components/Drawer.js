import React from 'react';

import {
  Drawer,
  List,
  Divider,
  Toolbar,
  IconButton,
  ListItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CatchingPokemon, Close } from '@mui/icons-material';

export default function NavDrawer () {
  const anchor = 'right';
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <IconButton
        sx={{
          color: 'white'
        }}
        onClick={() => {
          setDrawerOpen(true)
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ height: '100px' }}
        anchor={anchor}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
        }}
      >
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <IconButton
            onClick={() => {
              setDrawerOpen(false)
            }}
            size='small'
          >
            <Close />
          </IconButton>
        </Toolbar>

        <Divider />
        <List>
          <ListItem>
            <CatchingPokemon
              sx={{
                marginRight: '10px',
                fontSize: '20px'
              }}
            />
            empty inside
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}