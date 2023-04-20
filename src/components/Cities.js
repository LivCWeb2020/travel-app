import React, { useEffect, useState } from 'react'
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container
} from '@mui/material'


export default function Cities () {
  // Redux
 
  // Component State


  // Fetch cities from Firebase


  // Create new city with Firebase Function

  return (
    <Container
      sx={{
        marginTop: '100px',
        marginBottom: '60px'
      }}
    >
      <div className='flex justify-between'>
        <Button
          variant='contained'
          disabled={false}
        >
          Create New City
        </Button>

        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>Filter</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Filter'
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Visited'}>Visited</MenuItem>
            <MenuItem value={'Not Visited'}>Not Visited</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={4} sx={{ marginTop: '0.5rem' }}>
        <div>Hello world</div>
      </Grid>
    </Container>
  )
}