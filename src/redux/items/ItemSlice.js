import {createSlice} from "@reduxjs/toolkit";
import {create, getBlogs} from "../../services/ItemService";

const initialState = {
    blogs: []
}
const itemSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        });
        builder.addCase(create.fulfilled, (state, action) => {
        });
    }
})
export default itemSlice.reducer;