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
      state.isAuthenticated = false;
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
      state.loading = false
      state.isAuthenticated = true;
      state.user = action.payload.user;
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

    verifyUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    updateAvatarRequest: (state) => {
      state.loading = true;
    },

    updateAvatarSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    updateAvatarFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateNameRequest: (state) => {
      state.loading = true;
    },

    updateNameSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    updateNameFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateRoomRequest: (state) => {
      state.loading = true;
    },

    updateRoomSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    updateRoomFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    chnagePasswordRequest: (state) => {
      state.loading = true;
    },

    chnagePasswordSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message;
    },

    chnagePasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgetPasswordRequest: (state) => {
      state.loading = true;
    },

    forgetPasswordSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message;
    },

    forgetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },

    resetPasswordSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message;
    },

    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
  updateAvatarRequest,
  updateAvatarSuccess,
  updateAvatarFailure,
  updateNameRequest,
  updateNameSuccess,
  updateNameFailure,
  updateRoomRequest,
  updateRoomSuccess,
  updateRoomFailure,
  chnagePasswordRequest,
  chnagePasswordSuccess,
  chnagePasswordFailure,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  clearError,
  clearMessage,
  changeTheme,

} = authSlice.actions;
