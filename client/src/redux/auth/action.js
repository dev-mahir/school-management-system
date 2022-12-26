import axios from "axios";
import { toast } from "react-toastify";
import { LOADING_START, LOADING_STOP } from "../loader/actionTypes";
import { LOGIN_SUCCESS } from "./actionType";

// user register
export const userRegister = (data, setInput, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .post(
        "http://localhost:5050/api/v1/user/register",
        data
      )
      .then((res) => {
        dispatch({ type: LOADING_STOP });
        setInput({
          email: "",
          password: "",
        });
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        dispatch({ type: LOADING_STOP });
        toast.error(error.response.data.message);
        console.log(error);
      });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    toast.error(error.response.data.message);
        console.log(error);

  }
};



// user login
export const userLogin = (data, setInput, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .post(
        "http://localhost:5050/api/v1/user/login",
        data
      )
      .then((res) => {
        dispatch({ type: LOADING_STOP });
        dispatch({type: LOGIN_SUCCESS, payload: res.data.user })
        setInput({
          email: "",
          password: "",
        });
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: LOADING_STOP });
        toast.error(error.response.data.message);
        console.log(error);
      });
  } catch (error) {
    dispatch({ type: LOADING_STOP });
    toast.error(error.response.data.message);
        console.log(error);

  }
};
