import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";

export const loginUser = (data) => (dispatch) => {
  axios
    .post("http://localhost:4000/login", data)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    })
    .catch((e) => console.log(e));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// Registration for the backend

export const registerUser = (data, history) => (dispatch) => {
  axios.post("http://localhost:4000/register-ngo", data).then((res) => {
    const { success, newOrganization } = res.data;
    // if the res success jis true
    console.log(res.data);
    // if (success) {

    //   // Set the current user to be the res newOrganization
    //   dispatch(setCurrentUser(newOrganization));
    //   // Push them to the login
    //   history.push("/login");
    // }
  });
};
