import {createSlice} from '@reduxjs/toolkit';
import {Counter} from '../interface';

const initialState: Counter = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    up: state => {
      state.number += 1;
    },
    down: state => {
      state.number -= 1;
    },
  },
});

export const {up, down} = counterSlice.actions;

export default counterSlice.reducer;
