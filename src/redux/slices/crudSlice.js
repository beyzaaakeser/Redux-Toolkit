import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const crudSlice = createSlice({
  name: 'crud',
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();

      state.tasks.push(action.payload);
    },
  },
});

export default crudSlice.reducer;
export const { addTask } = crudSlice.actions;
