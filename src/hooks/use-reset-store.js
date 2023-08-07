import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetForgotPasswordRequestState } from "../store/forgot-password-request/forgot-password-request.slice";
import { resetForgotPasswordResultState } from "../store/forgot-password-result/forgot-password-result.slice";
import { resetMagicUrlRequestState } from "../store/magic-url-request/magic-url-request.slice";
import { clearNewPasswordDetails } from "../store/update-password/update-password.slice";
import { resetRequestDateDataState } from "../store/request-date-data/request-date-data.slice";
import { clearShouldShowElementsState } from "../store/should-show-element/should-show-element.slice";
import { clearSignInFormDetails } from "../store/sign-in-form/sign-in-form.slice";
import { clearSignUpFormDetails } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailFields } from "../store/update-email/update-email.slice";
import { clearWalletFundsToAdd } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import { selectError } from "../store/user/user.selector";

import {
  addFundsRoute,
  bookSessionRoute,
  contactRoute,
  forgotPasswordResultRoute,
  forgotPasswordRequestRoute,
  magicUrlRequestRoute,
  magicUrlResultRoute,
  signInRoute,
  signUpRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
  updatePasswordResultRoute,
} from "../strings/strings";
import { resetErrorMessage } from "../store/user/user.slice";

const useResetStore = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const signOutResetStore = () => {
    dispatch(clearShouldShowElementsState());
    dispatch(clearSignInFormDetails());
    dispatch(clearSignUpFormDetails());
    dispatch(resetForgotPasswordRequestState());
    dispatch(resetForgotPasswordResultState());
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
        dispatch(resetForgotPasswordResultState());
        break;
      case magicUrlRequestRoute:
        dispatch(resetMagicUrlRequestState());
        dispatch(clearShouldShowElementsState());
        break;
      case magicUrlResultRoute:
        if (error) {
          dispatch(resetErrorMessage());
        }
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
