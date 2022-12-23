import { LOADING_START, LOADING_STOP } from "./actionTypes";




//  Loader start
export const loaderStart = () => (dispatch) => {
  dispatch({ type: LOADING_START });
};
//  Loader start
export const loaderStop = () => (dispatch) => {
  dispatch({ type: LOADING_STOP });
};
