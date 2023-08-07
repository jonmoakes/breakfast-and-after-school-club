import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetForgotPasswordRequestState } from "../store/forgot-password-request/forgot-password-request.slice";
import { resetForgotPasswordState } from "../store/forgot-password/forgot-password.slice";
import { resetMagicUrlState } from "../store/magic-url/magic-url.slice";
import { clearNewPasswordDetails } from "../store/update-password/update-password.slice";
import { resetRequestDateDataState } from "../store/request-date-data/request-date-data.slice";
import { clearShouldShowElementsState } from "../store/should-show-element/should-show-element.slice";
import { clearSignInFormDetails } from "../store/sign-in-form/sign-in-form.slice";
import { clearSignUpFormDetails } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailFields } from "../store/update-email/update-email.slice";
import { clearWalletFundsToAdd } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import {
  addFundsRoute,
  bookSessionRoute,
  contactRoute,
  forgotPasswordResultRoute,
  forgotPasswordRequestRoute,
  magicUrlResultRoute,
  magicUrlSignInRoute,
  signInRoute,
  signUpRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
  updatePasswordResultRoute,
} from "../strings/strings";

const useResetStore = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const signOutResetStore = () => {
    dispatch(clearShouldShowElementsState());
    dispatch(clearSignInFormDetails());
    dispatch(clearSignUpFormDetails());
    dispatch(resetForgotPasswordRequestState());
    dispatch(resetForgotPasswordState());
    dispatch(resetMagicUrlState());
    dispatch(resetContactFormState());
    dispatch(resetCardInputState());
    dispatch(clearWalletFundsToAdd());
    dispatch(resetRequestDateDataState());
    dispatch(resetUpdateEmailFields());
    dispatch(clearNewPasswordDetails());
  };
  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(clearShouldShowElementsState());
        dispatch(clearSignInFormDetails());
        break;
      case signUpRoute:
        dispatch(clearShouldShowElementsState());
        dispatch(clearSignUpFormDetails());
        break;
      case forgotPasswordRequestRoute:
        dispatch(resetForgotPasswordRequestState());
        break;
      case forgotPasswordResultRoute:
        dispatch(resetForgotPasswordState());
        break;
      case magicUrlSignInRoute:
        dispatch(resetMagicUrlState());
        dispatch(clearShouldShowElementsState());
        break;
      case magicUrlResultRoute:
        dispatch(resetMagicUrlState());
        break;
      case contactRoute:
        dispatch(resetContactFormState());
        break;
      case addFundsRoute:
        dispatch(resetCardInputState());
        dispatch(clearShouldShowElementsState());
        dispatch(clearWalletFundsToAdd());
        break;
      case bookSessionRoute:
        dispatch(resetRequestDateDataState());
        dispatch(dispatch(clearShouldShowElementsState()));
        break;
      case updateEmailRoute:
        dispatch(clearShouldShowElementsState());
        dispatch(resetUpdateEmailFields());
        break;
      case updatePasswordRequestRoute:
        dispatch(clearShouldShowElementsState());
        break;
      case updatePasswordResultRoute:
        dispatch(clearNewPasswordDetails());
        break;
      default:
        return;
    }
  };

  return { resetStore, signOutResetStore };
};

export default useResetStore;
