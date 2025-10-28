// import { configureStore } from "@reduxjs/toolkit";
// import todo from './slice'

// export const store = configureStore({
//     reducer : {
//         todoAPP : todo
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

// Custom Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("DISPATCHED ACTION:", action);
  let result = next(action);
  console.log("UPDATED STATE:", store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});

export default store;
