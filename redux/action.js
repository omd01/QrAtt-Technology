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
  logOutFailure
} from "./reducer";
// const serverUrl = "https://omd01-special-yodel-j97g5rr9g4g2p77p-4000.preview.app.github.dev/api/v1";

const serverUrl = "https://qratt-technology-server.onrender.com/api/v1";

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
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

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

    await AsyncStorage.setItem("user", JSON.stringify(data.user));

  } catch (error) {
    dispatch(loadUserFailure(error.response.data.message));
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch(logOutRequest());

    const { data } = await axios.get(`${serverUrl}/logout`);

    await AsyncStorage.setItem("user","");

    await AsyncStorage.setItem("isAuthenticated", "false");


     dispatch(logOutSuccess(data));

  } catch (error) {
    dispatch(logOutFailure(error.response.data.message));
  }
};
