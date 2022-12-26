import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import contactReducer from "./contact/contactReducer";
import loaderReducer from "./loader/loaderReducer";
import testimonialReducer from "./testimonial/testimonialReducer";
import themeReducer from "./themeMode/themeReducer";

// create root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  testimonial: testimonialReducer,
  theme: themeReducer,
  contact: contactReducer,
});

export default rootReducer;
