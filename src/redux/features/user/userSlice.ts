import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../../actions/userActionThunk";

interface UserState {
  uid: string;
  name: string;
  email: string;
  imageUrl: string;
}

interface UserInitialState {
  user: UserState | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const currentUser = localStorage.getItem("currentUser");
const user: UserState | null = currentUser
  ? JSON.parse(JSON.stringify(currentUser))
  : null;

const initialState: UserInitialState = {
  user: user || null,
  isLoading: false,
  error: null,
  isLoggedIn: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isLoading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.error = action.error?.message ?? "Login error";
      });
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.error = null;
        state.isLoggedIn = false;
        localStorage.removeItem("currentUser");
      })
      .addCase(logout.rejected, (state, action: any) => {
        state.isLoading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.error = action.error?.message ?? "Login error";
      });
  }
});

export default userSlice.reducer;
