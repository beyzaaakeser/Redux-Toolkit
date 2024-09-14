/*

    Hem reducerı hem de reducerın aksiyonlarınıu tek bir noktada oluşturmamızı sağlar.

    Slice Oluşturma Adımları : 
    1- impoprt createSlice
    2- name : Slice ismi > String alıyor
    3- initialState : başlangıç statei
    4- reducers : aksiyonların görevini tanımladığımız fonksiyonları ifade eder.


*/

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 1 },
  // hem aksiyonları hem de görevleri tanımlama
  reducers: {
    increase: (state, action) => {
      state.count++;
    },
    decrease: (state, action) => {
      state.count--;
    },
  },
});

// storea tanıtmak için export
export default counterSlice.reducer;

// aksiyon oluşturan fonksiyonları export et
export const { increase, decrease } = counterSlice.actions;
