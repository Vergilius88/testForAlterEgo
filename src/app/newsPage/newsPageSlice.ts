import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../api/api";
import { getNews } from "./newsPageOperations";

interface InitialState {
    news: Post[];
}

const initialState: InitialState = {
    news: []
};

const newsPageSlice = createSlice({
    name: "newsPageSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getNews.fulfilled, (state, data) => {
            state.news = data.payload;
        });
    }
});
export default newsPageSlice.reducer;
