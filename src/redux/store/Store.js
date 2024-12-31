import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer, // This creates the `cart` slice in the root state
  },
});

export default Store;

