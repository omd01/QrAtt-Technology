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

    singUpRequest: (state) => {
      state.loading = true;
      
    },

    singUpSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    singUpFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    verifyUserRequest: (state) => {
      state.loading = true;
      
    },

    verifyUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    verifyUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    loadUserRequest: (state) => {
      state.loadingUser = true;
    },

    loadUserSuccess: (state, action) => {
      state.loadingUser = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      
    },

    loadUserFailure: (state, action) => {
      state.loadingUser = false;
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
  singUpRequest,
  singUpSuccess,
  singUpFailure,
  verifyUserRequest,
  verifyUserSuccess,
  verifyUserFailure,
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
