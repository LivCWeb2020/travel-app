import React from 'react'
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel
} from '@mui/material'


export default function City () {
  // Update city visited status on Firebase function here
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div>
          <h3 className='text-xl font-bold  '>City</h3>
          <p className='text-sm '>Country</p>
        </div>
        <FormControlLabel
          labelPlacement='end'
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'visited' }}
            />
          }
          label='Visited'
          size='small'
        />
      </CardContent>
    </Card>
  )
}