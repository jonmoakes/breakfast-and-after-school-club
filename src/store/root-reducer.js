import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { loaderReducer } from "./loader/loader.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { contactFormReducer } from "./contact-form/contact-form.slice";
import { userReducer } from "./user/user.slice";
import { walletReducer } from "./wallet/wallet.slice";
import { cardInputResultReducer } from "./card-input-result/card-input-result.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  loader: loaderReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  contactForm: contactFormReducer,
  user: userReducer,
  wallet: walletReducer,
  cardInputResult: cardInputResultReducer,
});
