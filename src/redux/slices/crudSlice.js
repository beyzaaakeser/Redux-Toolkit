import { createSlice } from '@reduxjs/toolkit';

const crudSlice = createSlice({
  name: 'crud',
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      console.log('aksiyon oluştu');
      console.log(action);
    },
  },
});

export default createSlice.reducer;
export const { addTask } = crudSlice.actions;
