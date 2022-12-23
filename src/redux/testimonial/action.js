import axios from "axios";
import { toast } from "react-toastify";
import { LOADING_START, LOADING_STOP } from "../loader/actionTypes";
import { GET_SINGLE_TESTIMONIAL, GET_TESTIMONIAL } from "./actionType";

// get all testimonial
export const get_testimonials = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .get("https://api-g3s7.onrender.com/api/v1/testimonial")
      .then((res) => {
        dispatch({ type: GET_TESTIMONIAL, payload: res.data });
      })
      .catch((error) => {});
  } catch (error) {}
};

// add testimonial
export const add_testimonial = (data, setInput, e) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .post("http://localhost:5050/api/v1/testimonial", data)
      .then((res) => {
        toast.success("Testimonial added");
        setInput({
          name: "",
          designation: "",
          description: "",
          rating: "",
        });
        e.target.reset();
        dispatch(get_testimonials());
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
};

// delete testimonial
export const delete_testimonial = (id, setShow) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .delete(`http://localhost:5050/api/v1/testimonial/${id}`)
      .then((res) => {
        toast.success("Testimonial Deleted");
        dispatch(get_testimonials());
        setShow(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setShow(false);
      });
  } catch (error) {}
};

// edit testimonial
export const get_single_testimonial = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .get(`http://localhost:5050/api/v1/testimonial/${id}`)
      .then((res) => {
        dispatch({ type: GET_SINGLE_TESTIMONIAL, payload: res.data });
      })
      .catch((error) => {});
  } catch (error) {}
};

// edit testimonial
export const update_testimonial = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .patch(`http://localhost:5050/api/v1/testimonial/${id}`)
      .then((res) => {
        toast.success("Testimonial updated");
      })
      .catch((error) => {});
  } catch (error) {}
};
