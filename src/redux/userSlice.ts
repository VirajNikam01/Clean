import { createSlice } from "@reduxjs/toolkit";


type TuserDetails = {
    email: string
    password: string
    role: string
    name: string
    uid: string
    time: {
        nanoseconds: number
        seconds: number
    }
}
export type TiniialState = {
    user: null | string
    userDetails: TuserDetails
    isDataLoading: boolean
}

const defaultValues = {
    email: '',
    password: '',
    role: '',
    name: '',
    uid: '',
    time: {
        nanoseconds: 0,
        seconds: 0,
    }
}

const initialState: TiniialState = {
    user: null,
    userDetails: { ...defaultValues },
    isDataLoading: true
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addUser(state, action) {
            state.user = action.payload
        },
        addUserDetails(state, action) {
            state.userDetails = action.payload
        },
        removeUser(state) {
            state.user = null
            state.userDetails = { ...defaultValues }
        },
        setDataLoaded(state) {
            state.isDataLoading = false
        }
    },
})


export const { addUser, removeUser, addUserDetails, setDataLoaded } = userSlice.actions
export default userSlice.reducer



