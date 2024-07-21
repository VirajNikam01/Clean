import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

import { TiniialState } from "./userSlice";

export type Tstore = {
    user:TiniialState
}
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export { store }