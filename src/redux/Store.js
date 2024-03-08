import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./items/ItemSlice";
import userReduser from "./user/UserSlice";

export const store = configureStore({
    reducer:{
        blogs:itemReducer,
        users: userReduser
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;