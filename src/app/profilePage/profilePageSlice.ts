import { createSlice } from "@reduxjs/toolkit";
import { User } from "../api/api";
import { getUserData } from "./profilePageOperations";
interface InitialState {
    userData: User;
}

const initialState: InitialState = {
    userData: {
        id: 0,
        name: ""
    }
};
const profilePageSlice = createSlice({
    name: "profilePageSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserData.fulfilled, (state, data) => {
            state.userData = data.payload;
        });
    }
});

export default profilePageSlice.reducer;
