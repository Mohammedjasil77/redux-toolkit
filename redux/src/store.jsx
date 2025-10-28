import { configureStore } from "@reduxjs/toolkit";
import todo from './slice'

export const store = configureStore({
    reducer : {
        todoAPP : todo
    }
})