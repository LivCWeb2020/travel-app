import React, { useEffect, useState } from 'react'
import {
    Grid,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Container
} from '@mui/material'
import db, { createNewCity } from '../firebase/firebase'
import { ref, onValue } from 'firebase/database'
import { useSelector, useDispatch } from 'react-redux'
import { setCities } from '../redux/slices/cities'
import City from './City'
import { toast } from 'react-toastify'

export default function Cities() {
    // Redux
    const dispatch = useDispatch();
    const cities = useSelector(state => state.cities.value);
    

    // Component State
    const [loading, setLoading] = useState(true)
    const [loadingNewCity, setLoadingNewCity] = useState(false)

    // Fetch cities from Firebase
    useEffect(() => {
        setLoading(true)
        const citiesRef = ref(db, 'cities')
        onValue(citiesRef, snapshot => {
            const saveCities = cities => {
                dispatch(setCities(cities))
            }
            const data = snapshot.val()
            saveCities(data)
            setLoading(false)
        })
    }, [dispatch])

    // Create new city with Firebase Function
    const handleCreateCity = async () => {
        setLoadingNewCity(true)
        await createNewCity()
        // Show toast notification
        toast('New city created!', {
            type: 'success'
        })
        setLoadingNewCity(false)
    }

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
                    disabled={loadingNewCity}
                >
                    Create New City
                    {loadingNewCity && (
                        <CircularProgress
                            size={20}
                            sx={{
                                marginLeft: '1rem'
                            }}
                        />
                    )}
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
                {!loading ? (
                    Object.keys(cities)
                        .map((city, idx) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={idx}>
                                    <City city={city} cities={cities} />
                                </Grid>
                            )
                        })
                ) : (
                    <CircularProgress
                        sx={{
                            margin: 'auto',
                            marginTop: '6rem'
                        }}
                    />
                )}
            </Grid>
        </Container>
    )
}