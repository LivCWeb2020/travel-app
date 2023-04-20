import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setCities } = citiesSlice.actions

export default citiesSlice.reducer