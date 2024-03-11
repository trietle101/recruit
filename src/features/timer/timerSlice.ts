// src/features/countdownTimer/countdownTimerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimerState {
  seconds: number;
  minutes: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  seconds: 0,
  minutes: 5, // Example starting countdown time of 1 minute
  isRunning: false
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (
      state,
      action: PayloadAction<{ minutes: number; seconds: number }>
    ) => {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (
      state,
      action: PayloadAction<{ minutes: number; seconds: number }>
    ) => {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
      state.isRunning = false;
    },
    decrementTimer: (state) => {
      if (state.seconds > 0) {
        state.seconds -= 1;
      } else if (state.minutes > 0) {
        state.minutes -= 1;
        state.seconds = 59;
      } else {
        state.isRunning = false; // Stop the timer when it reaches 0
      }
    }
  }
});

export const { setTimer, startTimer, stopTimer, resetTimer, decrementTimer } =
  timerSlice.actions;

export default timerSlice.reducer;
