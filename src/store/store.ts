import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/reducers/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Типы для RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
