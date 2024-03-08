import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const loginUser = createAsyncThunk (
    'user/login',
    async (data) => {
        const response = await customAxios.post('login', data);
        return  response;
    }
)
