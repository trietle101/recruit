import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await getDocs(collection(db, "jobs"));
  const jobsData = response.docs.map((doc) => doc.data());
  return jobsData;
});
