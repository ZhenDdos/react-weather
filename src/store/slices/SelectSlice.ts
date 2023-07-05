import { createSlice } from "@reduxjs/toolkit";

const initialState =  { value: 'Paris', label: 'Париж' };


export const sel = createSlice({
    name: 'currentOptSelect',
    initialState,
    reducers: {
        onChangeSelect(state, action) {
            state.label = action.payload.label;
            state.value = action.payload.value;
        } 
    }
})

export default sel.reducer
export const {onChangeSelect} = sel.actions