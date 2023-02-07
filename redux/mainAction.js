import axios from "axios";
import {
  cancelLeaveFailure,
  cancelLeaveRequest,
  cancelLeaveSuccess,
  leaveFailure,
  leaveRequest,
  leaveSuccess,
  loadTeachersFailure,
  loadTeachersRequest,
  loadTeachersSuccess,
  myLeavesFailure,
  myLeavesRequest,
  myLeavesSuccess,
} from "./messageReducer";

// const serverUrl = "https://omd01-special-yodel-j97g5rr9g4g2p77p-4000.preview.app.github.dev/api/v1";

const serverUrl = "https://qratt-technology-server.onrender.com/api/v1";

export const leaveRequeste =
  (teacher, reason, from, to) => async (dispatch) => {
    dispatch(leaveRequest());
    try {
      const { data } = await axios.post(
        `${serverUrl}/leav/newleav`,
        { teacher, reason, from, to },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

       dispatch(leaveSuccess(data));
      
    } catch (error) {
      dispatch(leaveFailure(error.response.data.message));
    }
  };

export const getMyLeaves = () => async (dispatch) => {
  try {
    dispatch(myLeavesRequest());

    const { data } = await axios.get(`${serverUrl}/leav/myleav`);

    const customShort = (a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (dateA > dateB) return 1;
      else if (dateA < dateB) return -1;
      return 0;
    };

    dispatch(myLeavesSuccess(data.data.sort(customShort).reverse()));
  } catch (error) {
    dispatch(myLeavesFailure(error.response.data.message));
  }
};

export const cancelLeave = (leaveId) => async (dispatch) => {
  try {
    dispatch(cancelLeaveRequest());

    const { data } = await axios.delete(`${serverUrl}/leav/delete/${leaveId}`);

    dispatch(cancelLeaveSuccess(data));
  } catch (error) {
    dispatch(cancelLeaveFailure(error.response.data.message));
  }
};

export const loadTeachers = (leaveId) => async (dispatch) => {
  try {
    dispatch(loadTeachersRequest());

    const { data } = await axios.get(`${serverUrl}/getteacher`);

    dispatch(loadTeachersSuccess(data));
  } catch (error) {
    dispatch(loadTeachersFailure(error.response.data.message));
  }
};

export const makeAttendance = (myForm) => async (dispatch) => {
  dispatch(leaveRequest());
  try {
    const { data } = await axios.post(`${serverUrl}/attendence/new`, myForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(leaveSuccess(data));
  } catch (error) {
    dispatch(leaveFailure(error.response.data.message));
  }
};
