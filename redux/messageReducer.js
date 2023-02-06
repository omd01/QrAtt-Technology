import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    leaveRequest: (state) => {
      state.loading = true;
    },

    leaveSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    leaveFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    myLeavesRequest: (state) => {
      state.loading = true;
    },

    myLeavesSuccess: (state, action) => {
      state.loading = false;
      state.myLeaves = action.payload;
      state.message = action.payload.message;
    },

    myLeavesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    

    },

    cancelLeaveRequest: (state) => {
      state.loading = true;
    },

    cancelLeaveSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    cancelLeaveFailure: (state, action) => {
      state.loading = false;
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

export default messageSlice.reducer;

export const {
  leaveRequest,
  leaveSuccess,
  leaveFailure,
  myLeavesRequest,
  myLeavesSuccess,
  myLeavesFailure,
  cancelLeaveRequest,
  cancelLeaveSuccess,
  cancelLeaveFailure,
  clearError,
  clearMessage,
} = messageSlice.actions;
