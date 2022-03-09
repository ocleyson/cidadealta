import { configureStore } from '@reduxjs/toolkit';
import penalCodeReducer from '../reducers/penalCode/penalCodeSlice';

export const store = configureStore({
  reducer: {
    penalCode: penalCodeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
