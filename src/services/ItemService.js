import {createAsyncThunk} from "@reduxjs/toolkit";

import customAxios from "./api";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async (data) => {
        return await customAxios.get('blogs', data);
    }
)
export const create = createAsyncThunk(
    'blogs/create',
    async (data) => {
        const res = await customAxios.post('blogs', data);
        return res.data
    }
)
export const edit = createAsyncThunk(
    'blogs/edit',
    async (id, data) => {
        await customAxios.put(`blogs/` + id, data);
    }
)