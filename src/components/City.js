import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  FormControlLabel
} from '@mui/material'

export default function City ({ city, cities }) {
  // Update city visited status on Firebase
  const handleUpdateCity = async () => {
    console.log('update city')
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image={cities[city].image}
        alt={cities[city].name}
      />
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div>
          <h3 className='text-xl font-bold  '>{cities[city].name}</h3>
          <p className='text-sm '>{cities[city].country}</p>
        </div>

        <FormControlLabel
          labelPlacement='end'
          control={
            <Checkbox
              checked={cities[city].visited}
              onChange={() => handleUpdateCity()}
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