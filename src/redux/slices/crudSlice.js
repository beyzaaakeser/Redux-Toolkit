import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { initialTasks } from '../../constants';

const crudSlice = createSlice({
  name: 'crud',
  initialState: { tasks: initialTasks},
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();

      state.tasks.push(action.payload);
    },
  },
});

export default crudSlice.reducer;
export const { addTask } = crudSlice.actions;
