import {
  CHANGE_THEME_MODE,
  DARK_MODE,
  LIGHT_MODE,
  LOADING_START,
  LOADING_STOP,
} from "./actionTypes";
import initialState from "./initialState";

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME_MODE:
      let op;
      if (state.isDarkMode === true) {
        op = false;
        localStorage.setItem('isDarkMode', false);
        document.documentElement.classList.remove('dark');
      } else {
        op = true;
        localStorage.setItem("isDarkMode", true);
        document.documentElement.classList.add("dark");
      }
      return {
        isDarkMode: op,
      };

    default:
      return state;
  }
};

export default themeReducer;
