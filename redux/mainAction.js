import axios from "axios";
import { leaveFailure, leaveRequest, leaveSuccess, myLeavesFailure, myLeavesRequest, myLeavesSuccess } from "./messageReducer";


// const serverUrl = "https://omd01-special-yodel-j97g5rr9g4g2p77p-4000.preview.app.github.dev/api/v1";

const serverUrl = "https://qratt-technology-server.onrender.com/api/v1";


export const leaveRequeste = (teacher,reason,from,to) => async (dispatch) => {
   
    console.log(teacher,reason,from,to);
dispatch(leaveRequest());
  try {

    const  {data}  = await axios.post(
      `${serverUrl}/leav/newleav`,
      { teacher, reason, from, to},
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch(leaveSuccess(data));

  } catch (error) {
    dispatch(leaveFailure(error.response.data.message ))
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