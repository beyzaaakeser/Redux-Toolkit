import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import crudReducer from './slices/crudSlice';

/*
    createStore vs configureStore karşılatırması  
    1- createStore kullanırken birden fazla reducer kullanacaksak mutlaka combineReducers yapmak zorundaydık
    Ama configureStoreda reducer tanımı yapıp yan yana yazarak kullanabiliyoruz kendisi otomatik birleştiriyor. Combine reducer kullanmana gerek yok
    thunk otomatik kurulu gelir. devtools da kurulu gelir.
*/

const store = configureStore({
  reducer: { counterReducer, crudReducer },
});

export default store;
