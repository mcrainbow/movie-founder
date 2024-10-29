import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John",
    age: 20,
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});
