import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
