import { createSlice } from "@reduxjs/toolkit";


type Titem = {
    productID: string
    totalItems: number
}
export type TcartSlice = {
    items: Titem[]
}

const initialState: TcartSlice = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productID, totalItems } = action.payload

            const itemAt = state.items.findIndex((item) => {
                return item.productID === productID
            })

            if (itemAt !== -1) {
                state.items[itemAt].totalItems += totalItems
            } else {
                state.items.push({ productID, totalItems })
            }

        },

        removeFromCart(state, action) {
            const { productID, totalItems } = action.payload

            const itemAt = state.items.findIndex((item) => {
                return item.productID === productID
            })

            const itemCount = state.items[itemAt].totalItems
            if (itemCount === 1) {
                state.items = state.items.filter((item) => {
                    return item.productID !== productID
                })
            } else {
                state.items[itemAt].totalItems -= totalItems
            }

        }
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer