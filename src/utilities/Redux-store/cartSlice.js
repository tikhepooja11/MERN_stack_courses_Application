import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //  Redux toolkit uses Immer library to modify the current state
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//  the exporting syntax is provided by redux only ....you have to write it as it is.
//  though cartSlice.reducer & cartSlice.actions doesnt present visually but it is exist in background, so export it as it is provided by redux
