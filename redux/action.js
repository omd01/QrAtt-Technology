import axios from "axios";
import {loginFailure, loginRequest, loginSuccess} from "./reducer";
const serverUrl = "https://omd01-special-yodel-j97g5rr9g4g2p77p-4000.preview.app.github.dev/api/v1";

export const login = ({email, password}) => async (dispatch) => {
   
dispatch(loginRequest());
  try {

    const  data  = await axios.post(
      `${serverUrl}/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(loginSuccess(data));

  } catch (error) {
    dispatch(loginFailure(error.response.data.message ))
  }
};

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: "loadUserRequest" });
  
      const { data } = await axios.get(`${serverUrl}/me`);

      dispatch({ type: "loadUserSuccess", payload: data });

    } catch (error) {
      dispatch({ type: "loadUserFailure", payload: error.response.data.message });
    }
  };