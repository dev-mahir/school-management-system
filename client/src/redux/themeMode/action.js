import { useEffect, useState } from "react";
import { CHANGE_THEME_MODE, CHECK_THEME_MODE, DARK_MODE, LIGHT_MODE } from "./actionTypes";



// check theme mode
export const change_theme_mode = () => (dispatch) => {
 

  dispatch({type: CHANGE_THEME_MODE })


};
