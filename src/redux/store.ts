import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import timerReducer from "./features/timer/timerSlice";
import imagesReducer from "./features/images/imagesSlice";
import jobsReducer from "./features/jobs/jobsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    timer: timerReducer,
    images: imagesReducer,
    jobs: jobsReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
