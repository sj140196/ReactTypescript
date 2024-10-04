// src/store/hierarchySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface HierarchyState {
  hierarchy: string[];  // Assuming hierarchy is an array of strings
}

// Define the initial state
const initialState: HierarchyState = {
  hierarchy: [],
};

const hierarchySlice = createSlice({
  name: 'hierarchy',
  initialState,
  reducers: {
    setHierarchy: (state, action: PayloadAction<string[]>) => {
      state.hierarchy = action.payload;
    },
  },
});

export const { setHierarchy } = hierarchySlice.actions;
export default hierarchySlice.reducer;
