import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getCommentsData = createAsyncThunk("commentsData/get", async () => {
    const result = await api.getComments();
    return result.data;
});
