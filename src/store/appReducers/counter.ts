import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SliceState = number;
const initialState: SliceState = 0;

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state += action.payload
    }
})

export const actions = counterSlice.actions;