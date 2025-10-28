import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, loading: false, error: null },

  reducers: {
    fetchStart: (state) => { state.loading = true; },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchStart, fetchSuccess, fetchError } = userSlice.actions;

// ✅ Thunk Function (API Call)
export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(fetchStart()); // loading = true
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      dispatch(fetchSuccess(data)); // success
    } catch (error) {
      dispatch(fetchError("Failed to Fetch")); // error
    }
  };
};

export default userSlice.reducer;
