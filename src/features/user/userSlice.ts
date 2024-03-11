import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  value: { name: string } | null;
}

// Define the initial state using that type
const initialState: UserState = {
  value: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string }>) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = null;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
