import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectGetPricesError } from "../store/session-types-and-prices/session-types-and-prices.selector";
import { selectGetUsersChildrenError } from "../store/get-users-children/get-users-children.selector";
import { selectGetUserBookingsError } from "../store/user-bookings/user-bookings.selector";
import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetForgotPasswordRequestState } from "../store/forgot-password-request/forgot-password-request.slice";
import { resetForgotPasswordResultState } from "../store/forgot-password-result/forgot-password-result.slice";
import { clearNewPasswordDetails } from "../store/update-password-result/update-password-result.slice";
import { resetRequestDateDataState } from "../store/request-date-data/request-date-data.slice";
import { resetShouldShowElementState } from "../store/should-show-element/should-show-element.slice";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../store/update-email/update-email.slice";
import { resetWalletFundsToAddState } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import {
  resetAllHandlePaymentState,
  resetPreResultHandlePaymentState,
} from "../store/handle-payment/handle-payment.slice";
import { resetUpdatePasswordRequestState } from "../store/update-password-request/update-password-request.slice";
import { setCurrentDateAndTime } from "../store/date-and-time/date-and-time.slice";
import { resetAllChildInfoState } from "../store/add-child-info/add-child-info.slice";
import { resetEditChildInfoState } from "../store/edit-child-info/edit-child-info.slice";
import { resetDeleteChildInfoState } from "../store/delete-child-info/delete-child-info.slice";
import { resetBookSessionState } from "../store/book-session/book-session.slice";

import {
  addFundsRoute,
  bookSessionRoute,
  contactRoute,
  forgotPasswordResultRoute,
  forgotPasswordRequestRoute,
  signInRoute,
  signUpRoute,
  updateEmailRoute,
  updatePasswordRequestRoute,
  updatePasswordResultRoute,
  addChildInfoRoute,
  editChildInfoRoute,
  deleteChildInfoRoute,
  paymentResultRoute,
  cancelBookingRoute,
} from "../strings/strings";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";
import { resetSessionPricesError } from "../store/session-types-and-prices/session-types-and-prices.slice";
import { resetUsersChildrenError } from "../store/get-users-children/get-users-children-slice";
import { resetGetUserBookingsError } from "../store/user-bookings/user-bookings.slice";

const useResetStore = () => {
  const sessionPricesError = useSelector(selectGetPricesError);
  const getUsersChildrenError = useSelector(selectGetUsersChildrenError);
  const getUserBookingsError = useSelector(selectGetUserBookingsError);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(resetShouldShowElementState());
        dispatch(resetSignInFormState());
        break;
      case signUpRoute:
        dispatch(resetShouldShowElementState());
        dispatch(resetSignUpFormState());
        break;
      case forgotPasswordRequestRoute:
        dispatch(resetForgotPasswordRequestState());
        break;
      case forgotPasswordResultRoute:
        dispatch(resetForgotPasswordResultState());
        break;
      case contactRoute:
        dispatch(resetContactFormState());
        break;
      case addFundsRoute:
        dispatch(resetCardInputState());
        dispatch(resetShouldShowElementState());
        dispatch(resetWalletFundsToAddState());
        dispatch(resetPreResultHandlePaymentState());
        break;
      case paymentResultRoute:
        dispatch(resetCardInputState());
        dispatch(resetAllHandlePaymentState());
        dispatch(resetWalletFundsToAddState());
        dispatch(resetSendEmailState());
        break;
      case bookSessionRoute:
        dispatch(resetRequestDateDataState());
        dispatch(resetShouldShowElementState());
        dispatch(setCurrentDateAndTime(new Date()));
        dispatch(resetBookSessionState());
        dispatch(resetSendEmailState());
        if (sessionPricesError) {
          dispatch(resetSessionPricesError());
        } else if (getUsersChildrenError) {
          dispatch(resetUsersChildrenError());
        } else if (getUserBookingsError) {
          dispatch(resetGetUserBookingsError());
        }
        break;
      case updateEmailRoute:
        dispatch(resetShouldShowElementState());
        dispatch(resetUpdateEmailState());
        break;
      case updatePasswordRequestRoute:
        dispatch(resetShouldShowElementState());
        dispatch(resetUpdatePasswordRequestState());
        break;
      case updatePasswordResultRoute:
        dispatch(clearNewPasswordDetails());
        break;
      case addChildInfoRoute:
        dispatch(resetAllChildInfoState());
        break;
      case editChildInfoRoute:
        dispatch(resetEditChildInfoState());
        break;
      case deleteChildInfoRoute:
        dispatch(resetDeleteChildInfoState());
        break;
      case cancelBookingRoute:
        dispatch(resetBookingToDeleteState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
