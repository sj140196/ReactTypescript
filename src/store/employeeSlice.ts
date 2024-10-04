// src/store/employeeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the state
interface Employee {
  employeeId: string;
  name: string;
  // Add other fields as needed
}

interface EmployeeState {
  list: Employee[];
  selectedEmployee: Employee | null;
  hierarchy: string[];  // Assuming hierarchy is an array of strings
}

// Define the initial state
const initialState: EmployeeState = {
  list: [],
  selectedEmployee: null,
  hierarchy: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
    },
    selectEmployee: (state, action: PayloadAction<string>) => {
      state.selectedEmployee = state.list.find(
        (employee) => employee.employeeId === action.payload
      ) || null;
    },
    setHierarchy: (state, action: PayloadAction<string[]>) => {
      state.hierarchy = action.payload;
    },
  },
});

export const { addEmployee, selectEmployee, setHierarchy } = employeeSlice.actions;
export default employeeSlice.reducer;
