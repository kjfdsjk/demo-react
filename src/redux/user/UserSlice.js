import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../services/UserService";

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            localStorage.setItem('currentUser', JSON.stringify(payload.data))
            localStorage.setItem("access_token", payload.data.accessToken)
            state.currentUser = payload.data;
        });
    }
})
export default userSlice.reducer;
