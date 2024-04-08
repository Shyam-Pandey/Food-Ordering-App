import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            // console.log(action.payload.card.info.id)
            // console.log(state.items[0].card.info.id)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) =>
                item.card.info.id !== action.payload.card.info.id
                // if (item.card.info.id === action.payload.card.info.id) {
                //     state.items = state.items.length - 1
                // }
                // else { item.card.info.id !== action.payload.card.info.id }
            )
            // console.log(state.items.id)
            // console.log(action.payload)
            // state.items.pop();
        },
        emptyCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer