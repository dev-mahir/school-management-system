import { LOADING_START, LOADING_STOP } from "./actionTypes";
import initialState from "./initialState";

const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default loaderReducer;
