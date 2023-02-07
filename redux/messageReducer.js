import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    leaveRequest: (state) => {
      state.pending = true;
    },

    leaveSuccess: (state, action) => {
      state.pending = false;
      state.message = action.payload.message;
    },

    leaveFailure: (state, action) => {
      state.pending = false;
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
      state.pending = true;
    },

    cancelLeaveSuccess: (state, action) => {
      state.pending = false;
      state.message = action.payload.message;
    },

    cancelLeaveFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },

    loadTeachersRequest: (state) => {
      state.loading = true;
    },

    loadTeachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload.data;
      state.message = action.payload.message;
    },

    loadTeachersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    makeAttendancesRequest: (state) => {
      state.pending = true;
    },

    makeAttendancesSuccess: (state, action) => {
      state.pending = false;
      state.message = action.payload.message;
    },

    makeAttendancesFailure: (state, action) => {
      state.pending = false;
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
  loadTeachersRequest,
  loadTeachersSuccess,
  loadTeachersFailure,
  makeAttendancesRequest,
  makeAttendancesSuccess,
  makeAttendancesFailure,
  clearError,
  clearMessage,
} = messageSlice.actions;
