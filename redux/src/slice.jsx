import { createSlice } from "@reduxjs/toolkit";
let todoId = 0;

const slice = createSlice({
    initialState : {value:[]},
    name : "todoapp",
    reducers : {
        add : (state,action) => {
            state.value.push({id:todoId++, text : action.payload})
        },
        remove : (state,action) => {
            state.value = state.value.filter((e)=> e.id != action.payload)
        },
        edit : (state,action) => {
            const todo = state.value.find((e)=> e.id == action.payload.id)
            if(todo){
                todo.text = action.payload.text;
            }
        }
    }
})

export const {add, remove, edit } = slice.actions
export default slice.reducer