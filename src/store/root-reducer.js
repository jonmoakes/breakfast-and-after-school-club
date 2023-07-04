import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { loaderReducer } from "./loader/loader-slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  loader: loaderReducer,
});
