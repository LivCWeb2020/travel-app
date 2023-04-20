import React, { useEffect, useState } from 'react';
import db, { createNewCity } from '../firebase/firebase';
import { ref, onValue } from 'firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { setCities } from '../redux/slices/cities';
import { toast } from 'react-toastify';
import City from './City';
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
  const dispatch = useDispatch();
  // Component State


  // Fetch cities from Firebase
  useEffect(() => {
    const citiesRef = ref(db, 'cities')
    onValue(citiesRef, snapshot => {
      const saveCities = cities => {
        dispatch(setCities(cities))
      }
      const data = snapshot.val()
      saveCities(data)
    })
  }, [dispatch]);


  // Create new city with Firebase Function
  const handleCreateCity = async () => {
    await createNewCity()
    // Show toast notification
    toast('New city created!', {
      type: 'success'
    })
  };

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
          onClick={() => handleCreateCity()}
          disabled={false}
        >
          Create New City
        </Button>
        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>Filter</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            label='Filter'>
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Visited'}>Visited</MenuItem>
            <MenuItem value={'Not Visited'}>Not Visited</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={4} sx={{ marginTop: '0.5rem' }}>
        <Grid>
            <City />
            <City />
            <City />
            <City />
        </Grid>
      </Grid>
    </Container>
  )
}