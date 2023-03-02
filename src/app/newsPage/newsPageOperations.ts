import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getNews = createAsyncThunk("newsData/get", async () => {
    const result = await api.getPosts();
    return result.data;
});
export const deleteNews = createAsyncThunk("newsData/delete", async (request: number) => {
    const result = await api.deletePost(request);
    return result.request;
});