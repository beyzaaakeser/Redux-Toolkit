import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { initialTasks } from '../../constants';

const crudSlice = createSlice({
  name: 'crud',
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();

      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
     /*  1.Yöntem
      const filtred = state.tasks.filter((i) => i.id !== action.payload);
      state.tasks = filtred; 
    */

      // 2. Yöntem
      const i = state.tasks.findIndex((i) => i.id === action.payload)
      state.tasks.splice(i,1)
    },
  },
});

export default crudSlice.reducer;
export const { addTask,deleteTask } = crudSlice.actions;
