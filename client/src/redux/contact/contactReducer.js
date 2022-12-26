import { GET_CONTACT, GET_SINGLE_CONTACT } from "./actionType";
import initialState from "./initialState";

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT:
      return {
        ...state,
        testimonials: payload,
      };
    case GET_SINGLE_CONTACT:
      return {
        ...state,
        testimonial: payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
