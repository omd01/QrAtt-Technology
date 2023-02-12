import axios from "axios";
const serverUrl = "https://qratt-technology-server.onrender.com/api/v1";

export const setToken = (token) => async (dispatch) => {

    try {
      const { data } = await axios.put(
        `${serverUrl}/setexpotoken`,
        { token },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

    } catch (error) {
        alert(error.response.data.message)
    }
  };