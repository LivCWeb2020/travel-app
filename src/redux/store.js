import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slices/ui';
import citiesSlice from './slices/cities';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    cities: citiesSlice
  }
});