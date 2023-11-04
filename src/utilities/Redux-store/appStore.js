import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

//  for each slice we will be having a different reducer & appStore reducer will combine all slices reducer
