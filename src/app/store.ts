import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import timerReducer from "../features/timer/timerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    timer: timerReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
