import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logOutRequest,
  logOutSuccess,
  logOutFailure,
  singUpRequest,
  singUpSuccess,
  singUpFailure,
  verifyUserRequest,
  verifyUserSuccess,
  verifyUserFailure,
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
} from "./reducer";
// const serverUrl = "https://omd01-special-yodel-j97g5rr9g4g2p77p-4000.preview.app.github.dev/api/v1";

const serverUrl = "https://qratt-technology-server.onrender.com/api/v1";

export const signUp = (myForm) => async (dispatch) => {
  dispatch(singUpRequest());
  try {
    const { data } = await axios.post(`${serverUrl}/register`, myForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    await dispatch(singUpSuccess(data));
    await AsyncStorage.setItem("isAuthenticated", "true");
  } catch (error) {
    dispatch(singUpFailure(error.response.data.message));
  }
};


export const verifyUser = (otp) => async (dispatch) => {

  dispatch(verifyUserRequest());
  try {
    const { data } = await axios.post(`${serverUrl}/verify`, {otp}, {
      headers: { "Content-Type": "application/json" },

    });
    await dispatch(verifyUserSuccess(data));
    await AsyncStorage.setItem("isAuthenticated", "true");
  } catch (error) {
    dispatch(verifyUserFailure(error.response.data.message));
  }
};


export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { data } = await axios.post(
        `${serverUrl}/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      await dispatch(loginSuccess(data));

      await AsyncStorage.setItem("isAuthenticated", "true");
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
    }
  };

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(`${serverUrl}/me`);

    await dispatch(loadUserSuccess(data));
  } catch (error) {
  
    dispatch(loadUserFailure(error.response.data.message));
   
  }
};

export const updateAvatar = (myForm) => async (dispatch) => {

  dispatch(updateAvatarRequest());
  try {
    const { data } = await axios.put(`${serverUrl}/updateavatar`, myForm, {
      headers: { "Content-Type": "multipart/form-data" },

    });
    dispatch(updateAvatarSuccess(data));

  } catch (error) {
    dispatch(updateAvatarFailure(error.response.data.message));
  }
};

export const updateName = (name) => async (dispatch) => {

  dispatch(updateNameRequest());
  try {
    const { data } = await axios.put(`${serverUrl}/updateName`, {name}, {
      headers: { "Content-Type": "application/json" },

    });
    dispatch(updateNameSuccess(data));

  } catch (error) {
    dispatch(updateNameFailure(error.response.data.message));
  }
};

export const updateRoom = (roomNo) => async (dispatch) => {

  dispatch(updateRoomRequest());
  try {
    const { data } = await axios.put(`${serverUrl}/updateroom`, {roomNo}, {
      headers: { "Content-Type": "application/json" },

    });
    dispatch(updateRoomSuccess(data));

  } catch (error) {
    dispatch(updateRoomFailure(error.response.data.message));
  }
};

export const changePassword = (oldPassword,newPassword) => async (dispatch) => {

    dispatch(chnagePasswordRequest());
    try {
      const { data } = await axios.put(`${serverUrl}/updatepassword`, {oldPassword,newPassword}, {
        headers: { "Content-Type": "application/json" },
  
      });
      dispatch(chnagePasswordSuccess(data));
  
    } catch (error) {
      dispatch(chnagePasswordFailure(error.response.data.message));
    }
};

export const forgetPassword = (email) => async (dispatch) => {

    dispatch(forgetPasswordRequest());
    try {
      const { data } = await axios.post(`${serverUrl}/forgetpassword`, {email}, {
        headers: { "Content-Type": "application/json" },
  
      });
      dispatch(forgetPasswordSuccess(data));
  
    } catch (error) {
      dispatch(forgetPasswordFailure(error.response.data.message));
    }
};

export const resetPassword = (otp,newPassword) => async (dispatch) => {

    dispatch(resetPasswordRequest());
    try {
      const { data } = await axios.post(`${serverUrl}/resetpassword`, {otp,newPassword}, {
        headers: { "Content-Type": "application/json" },
  
      });
      dispatch(resetPasswordSuccess(data));
  
    } catch (error) {
      dispatch(resetPasswordFailure(error.response.data.message));
    }
};


export const logOut = () => async (dispatch) => {
  try {
    dispatch(logOutRequest());

    const { data } = await axios.get(`${serverUrl}/logout`);

    await AsyncStorage.setItem("isAuthenticated", "false");

    
    dispatch(logOutSuccess(data));
  } catch (error) {
    dispatch(logOutFailure(error.response.data.message));
  }
};
