import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useAddChildInfoActions from "./get-actions/use-add-child-info-actions";
import useBookSessionActions from "../hooks/get-actions/use-book-session-actions";

import { selectGetUsersChildrenSelectors } from "../store/get-users-children/get-users-children.slice";
import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetChooseNewPasswordState } from "../store/choose-new-password/choose-new-password.slice";
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
import { setCurrentDateAndTime } from "../store/date-and-time/date-and-time.slice";
import { resetEditChildInfoState } from "../store/edit-child-info/edit-child-info.slice";
import { resetDeleteChildInfoState } from "../store/delete-child-info/delete-child-info.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetUserBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";
import {
  resetSessionPricesError,
  selectSessionTypesAndPricesSelectors,
} from "../store/session-types-and-prices/session-types-and-prices.slice";
import { resetUsersChildrenError } from "../store/get-users-children/get-users-children.slice";
import {
  resetBookSessionUserError,
  resetBookedSessionsUserState,
  selectBookedSessionsUserSelectors,
} from "../store/booked-sessions-user/booked-sessions-user.slice";
import {
  resetBookedSessionsOwnerError,
  resetBookedSessionsOwnerState,
  selectBookedSessionsOwnerSelectors,
} from "../store/booked-sessions-owner/booked-sessions-owner.slice";
import {
  selectGetAllChildrenSelectors,
  resetGetAllChildrenError,
  resetGetAllChildrenState,
} from "../store/get-all-children/get-all-children.slice";
import {
  resetGetAllUsersError,
  resetGetAllUsersState,
  selectGetAllUsersSelectors,
} from "../store/get-all-users/get-all-users.slice";

import {
  addFundsRoute,
  bookSessionRoute,
  contactRoute,
  forgotPasswordRequestRoute,
  signInRoute,
  signUpRoute,
  updateEmailRoute,
  addChildInfoRoute,
  editChildInfoRoute,
  deleteChildInfoRoute,
  paymentResultRoute,
  cancelBookingRoute,
  bookedSessionsOwnerRoute,
  productionChooseNewPasswordRoute,
  localhostChooseNewPasswordRoute,
  bookedSessionsUserRoute,
  allChildrenRoute,
  allUsersRoute,
} from "../strings/routes/routes-strings";

const useResetStore = () => {
  const { dispatchResetAllAddChildInfoState } = useAddChildInfoActions();
  const { dispatchResetBookSessionState } = useBookSessionActions();

  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const { bookedSessionsUserError } = useSelector(
    selectBookedSessionsUserSelectors
  );
  const { bookedSessionsOwnerError } = useSelector(
    selectBookedSessionsOwnerSelectors
  );
  const { getAllChildrenError } = useSelector(selectGetAllChildrenSelectors);
  const { getAllUsersError } = useSelector(selectGetAllUsersSelectors);

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
        dispatch(resetGenerateNewPasswordRequestState());
        break;
      case productionChooseNewPasswordRoute:
      case localhostChooseNewPasswordRoute:
        dispatch(resetChooseNewPasswordState());
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
        dispatchResetBookSessionState();
        dispatch(resetSendEmailState());
        if (sessionTypesAndPricesError) {
          dispatch(resetSessionPricesError());
        } else if (getUsersChildrenError) {
          dispatch(resetUsersChildrenError());
        } else if (bookedSessionsUserError) {
          dispatch(resetBookSessionUserError());
        }
        break;
      case updateEmailRoute:
        dispatch(resetShouldShowElementState());
        dispatch(resetUpdateEmailState());
        break;
      case addChildInfoRoute:
        dispatchResetAllAddChildInfoState();
        break;
      case editChildInfoRoute:
        dispatch(resetEditChildInfoState());
        break;
      case deleteChildInfoRoute:
        dispatch(resetDeleteChildInfoState());
        break;
      case cancelBookingRoute:
        dispatch(resetUserBookingToDeleteState());
        break;
      case bookedSessionsOwnerRoute:
        if (bookedSessionsOwnerError) {
          dispatch(resetBookedSessionsOwnerError());
        } else {
          dispatch(resetBookedSessionsOwnerState());
        }
        break;
      case bookedSessionsUserRoute:
        if (bookedSessionsUserError) {
          dispatch(resetBookSessionUserError());
        } else {
          dispatch(resetBookedSessionsUserState());
        }
        break;
      case allChildrenRoute:
        if (getAllChildrenError) {
          dispatch(resetGetAllChildrenError());
        } else {
          dispatch(resetGetAllChildrenState());
        }
        break;
      case allUsersRoute:
        if (getAllUsersError) {
          dispatch(resetGetAllUsersError());
        } else {
          dispatch(resetGetAllUsersState());
        }
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
