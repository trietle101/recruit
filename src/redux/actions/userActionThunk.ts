import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

interface Credentials {
  email: string;
  password: string;
  role: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }: Credentials) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const currentUser = user.providerData.map((profile) => {
        return profile;
      });
      localStorage.setItem("role", role);
      return currentUser[0];
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await signOut(auth);
  return response;
});
