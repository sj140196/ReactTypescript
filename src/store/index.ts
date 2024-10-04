import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import hierarchyReducer from './hierarchySlice';

// Configure the store
export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    hierarchy: hierarchyReducer,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;
