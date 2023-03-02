import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";


export const getNews = createAsyncThunk("newsData/get", async (request: api.UserId) => {
    const result = await api.getPosts(request);
    return result.data;
});
export const deleteNews = createAsyncThunk("newsData/delete", async (request: number) => {
    await api.deletePost(request);
    return request;
});
