import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './Reducer/CounterSlice';
import TodoReducer from './Reducer/TodoSlice';

export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        todo:TodoReducer,
    }
})