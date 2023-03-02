import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../api/api";
import { getCommentsData } from "./homePageOperation";

interface InitialState {
    comments: Comment[];
}
const initialState: InitialState = {
    comments: []
};

const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCommentsData.fulfilled, (state, data) => {
            state.comments = data.payload;
        });
    }
});
export default homePageSlice.reducer;
