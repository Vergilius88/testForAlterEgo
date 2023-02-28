import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getNews = createAsyncThunk("newsData/get", async () => {
    const result = await api.getPosts();
    return result.data;
});
