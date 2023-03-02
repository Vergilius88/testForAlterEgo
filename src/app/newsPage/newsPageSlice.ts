import { createSlice } from "@reduxjs/toolkit";
import { News } from "../api/api";
import { deleteNews, getNews } from "./newsPageOperations";

interface InitialState {
    news: News[];
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
        builder.addCase(deleteNews.fulfilled, (state, data) => {
            state.news = state.news.filter((item: News) => item.id !== data.payload);
        });
    }
});
export default newsPageSlice.reducer;
