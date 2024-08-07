import { createSlice } from "@reduxjs/toolkit";


export type TnavBar = {
    isNavbarOpen: boolean
}

const initialState: TnavBar = {
    isNavbarOpen: false
}

export const navBar = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toogle(state) {
            state.isNavbarOpen = !state.isNavbarOpen
        },
        closeNavbar(state) {
            state.isNavbarOpen = false
        },
    }
})

export const { toogle, closeNavbar } = navBar.actions
export default navBar.reducer