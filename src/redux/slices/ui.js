import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light'
}

export const uiSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }
  }
})

export const { toggleTheme } = uiSlice.actions
export default uiSlice.reducer