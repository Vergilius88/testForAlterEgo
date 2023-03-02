import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getUserData = createAsyncThunk("userData/get", async (request: number) => {
    const result = await api.getRandomUser(request);
    return result.data;
});
