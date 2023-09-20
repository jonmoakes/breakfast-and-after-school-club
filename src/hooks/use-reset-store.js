import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetForgotPasswordRequestState } from "../store/forgot-password-request/forgot-password-request.slice";
import { resetForgotPasswordResultState } from "../store/forgot-password-result/forgot-password-result.slice";
import { resetMagicUrlRequestState } from "../store/magic-url-request/magic-url-request.slice";
import { clearNewPasswordDetails } from "../store/update-password-result/update-password-result.slice";
import { resetRequestDateDataState } from "../store/request-date-data/request-date-data.slice";
import { clearShouldShowElementsState } from "../store/should-show-element/should-show-element.slice";
import { clearSignInFormDetails } from "../store/sign-in-form/sign-in-form.slice";
import { clearSignUpFormDetails } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../store/update-email/update-email.slice";
import { clearWalletFundsToAdd } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetPreResultHandlePaymentState } from "../store/handle-payment/handle-payment.slice";
import { resetUpdatePasswordRequestState } from "../store/update-password-request/update-password-request.slice";
import { setCurrentDateAndTime } from "../store/date-and-time/date-and-time.slice";

import {
  addFundsRoute,
  bookSessionRoute,
  contactRoute,
  forgotPasswordResultRoute,
  forgotPasswordRequestRoute,
  magicUrlRequestRoute,
  signInRoute,
  signUpRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
  updatePasswordResultRoute,
  addChildInfoRoute,
} from "../strings/strings";
import { resetChildInfo } from "../store/add-child-info/add-child-info.slice";

const useResetStore = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

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
      case contactRoute:
        dispatch(resetContactFormState());
        break;
      case addFundsRoute:
        dispatch(resetCardInputState());
        dispatch(clearShouldShowElementsState());
        dispatch(clearWalletFundsToAdd());
        dispatch(resetPreResultHandlePaymentState());
        break;
      case bookSessionRoute:
        dispatch(resetRequestDateDataState());
        dispatch(clearShouldShowElementsState());
        dispatch(setCurrentDateAndTime(new Date()));
        break;
      case updateEmailRoute:
        dispatch(clearShouldShowElementsState());
        dispatch(resetUpdateEmailState());
        break;
      case updatePasswordRequestRoute:
        dispatch(clearShouldShowElementsState());
        dispatch(resetUpdatePasswordRequestState());
        break;
      case updatePasswordResultRoute:
        dispatch(clearNewPasswordDetails());
        break;
      case addChildInfoRoute:
        dispatch(resetChildInfo());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
