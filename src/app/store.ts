import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsPageSlice from "./newsPage/newsPageSlice";
import profilePageSlice from "./profilePage/profilePageSlice";

export const store = configureStore({
    reducer: {
        profilePage: profilePageSlice,
        newsPage: newsPageSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
