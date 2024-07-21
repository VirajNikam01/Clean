import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import navbarReducer, { TnavBar } from './navbarSlice'
import { TiniialState } from "./userSlice";
import cartReducer, { TcartSlice } from './cartSlice'

export type Tstore = {
    user: TiniialState
    navbar: TnavBar
    cart: TcartSlice
}
const store = configureStore({
    reducer: {
        user: userReducer,
        navbar: navbarReducer,
        cart: cartReducer
    }
})

export { store }