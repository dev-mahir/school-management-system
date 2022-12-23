import axios from "axios";
import { toast } from "react-toastify";
import { LOADING_START } from "../loader/actionTypes";
import { GET_CONTACT, GET_SINGLE_CONTACT, GET_SINGLE_TESTIMONIAL  } from "./actionType";

// get all contact
export const get_contacts= () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .get("http://localhost:5050/api/v1/contact")
      .then((res) => {
        dispatch({ type: GET_CONTACT, payload: res.data });
      })
      .catch((error) => {});
  } catch (error) {}
};

// add contact
export const add_contact = (data, setInput, e) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .post("http://localhost:5050/api/v1/contact", data)
      .then((res) => {
        toast.success("Contact added");
        setInput({
          name: "",
          designation: "",
          description: "",
          rating: "",
        });
        e.target.reset();
        dispatch(get_contacts());
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
};

// delete contact
export const delete_contact = (id, setShow) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .delete(`http://localhost:5050/api/v1/contact/${id}`)
      .then((res) => {
        toast.success("Contact Deleted");
        dispatch(get_contacts());
        setShow(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setShow(false);
      });
  } catch (error) {}
};

// edit contact
export const get_single_contact = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .get(`http://localhost:5050/api/v1/contact/${id}`)
      .then((res) => {
        dispatch({ type: GET_SINGLE_CONTACT, payload: res.data });
      })
      .catch((error) => {});
  } catch (error) {}
};

// edit contact
export const update_contact = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    await axios
      .patch(`http://localhost:5050/api/v1/contact/${id}`)
      .then((res) => {
        toast.success("Contact updated");
      })
      .catch((error) => {});
  } catch (error) {}
};
