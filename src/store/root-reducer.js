import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
});
