import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { loaderReducer } from "./loader/loader.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { contactFormReducer } from "./contact-form/contact-form.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  loader: loaderReducer,
  signUpForm: signUpFormReducer,
  contactForm: contactFormReducer,
});
