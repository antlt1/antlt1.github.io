import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
  value: 0, // Giá trị ban đầu của counter
};

// Tạo slice cho counter
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Tăng giá trị counter
    increment: (state) => {
      state.value += 1;
    },
    // Giảm giá trị counter
    decrement: (state) => {
      state.value -= 1;
    },
    // Đặt giá trị counter theo payload
    setCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Xuất các action và reducer
export const { increment, decrement, setCounter } = counterSlice.actions;
export default counterSlice.reducer;
