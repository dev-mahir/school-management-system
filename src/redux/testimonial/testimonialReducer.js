
import { GET_SINGLE_TESTIMONIAL, GET_TESTIMONIAL } from "./actionType";
import initialState from "./initialState";


const testimonialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TESTIMONIAL:
      return {
        ...state,
        testimonials: payload
      };
    case GET_SINGLE_TESTIMONIAL:
      return {
        ...state,
        testimonial: payload,
      };
    default:
      return state;
  }
};

export default testimonialReducer;
