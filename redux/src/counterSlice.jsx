import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "counter",
    initialState : { value : 0},
    reducers : {
        increment : (state) => {state.value += 1 },
        decrement : (state) => {state.value -= 1 },
        addBy: (state, action) => { state.value += action.payload }


    }

});

export const { increment , decrement , addBy} = slice.actions
export default slice.reducer;