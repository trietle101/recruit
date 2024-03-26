import { createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../../actions/jobsActionThunk";

interface JobsState {
  jobs: any;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  error: null
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.jobs = [];
        state.error = null;
      })
      .addCase(getJobs.fulfilled, (state, action: any) => {
        state.jobs = action.payload;
        state.error = null;
      })
      .addCase(getJobs.rejected, (state, action: any) => {
        state.error = action.error?.message ?? "Get jobs error";
        state.jobs = [];
      });
  }
});
export default jobsSlice.reducer;
