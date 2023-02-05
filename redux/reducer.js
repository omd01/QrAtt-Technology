import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      console.log(action.payload);
    },

    loadUserRequest: (state) => {
      state.loadingHome = true;
    },

    loadUserSuccess: (state, action) => {
      state.loadingHome = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    loadUserFailure: (state, action) => {
      state.loadingHome = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  },
});


export default authSlice.reducer;

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  clearError,
  clearMessage,
} = authSlice.actions;
