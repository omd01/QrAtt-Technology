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
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },

    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      
    },

    loadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    },
    logOutRequest: (state) => {
      state.loading = true;

    },

    logOutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;

    },

    logOutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;

    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
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
  logOutRequest,
  logOutSuccess,
  logOutFailure,
  clearError,
  clearMessage,
  changeTheme,

} = authSlice.actions;
