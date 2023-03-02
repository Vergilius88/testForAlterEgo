import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getCommentsData = createAsyncThunk("commentsData/get", async (request: api.PostId) => {
    const result = await api.getComments(request);
    return result.data;
});
