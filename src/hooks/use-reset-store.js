import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useAddChildInfoActions from "./get-actions-and-thunks/add-child-info-actions-and-thunks/use-add-child-info-actions";
import useBookSessionActions from "./get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useGetBookedSessionsOwnerSelectors from "./get-selectors/use-get-booked-sessions-owner-selectors";
import useGetBookedSessionsUserSelectors from "./get-selectors/use-get-booked-sessions-user-selectors";
import useBookedSessionsOwnerActions from "./get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useBookedSessionsUserActions from "./get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-booked-session-user-actions";
import useGetRequestDateDataSelectors from "./get-selectors/use-get-request-date-data-selectors";
import useRequestDateDataActions from "./get-actions-and-thunks/use-request-date-data-actions";
import useCurrentDateAndTimeActions from "./get-actions-and-thunks/use-current-date-and-time-actions";
import useCardInputResultActions from "./get-actions-and-thunks/use-card-input-result-actions";
import useChooseNewPasswordActions from "./get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useContactFormActions from "./get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useDeleteChildInfoActions from "./get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "./get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";

import { selectGetUsersChildrenSelectors } from "../store/get-users-children/get-users-children.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetShouldShowElementState } from "../store/should-show-element/should-show-element.slice";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../store/update-email/update-email.slice";
import { resetWalletFundsToAddState } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import {
  resetAllHandlePaymentState,
  resetPreResultHandlePaymentState,
} from "../store/handle-payment/handle-payment.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetUserBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";
import {
  resetSessionPricesError,
  selectSessionTypesAndPricesSelectors,
} from "../store/session-types-and-prices/session-types-and-prices.slice";
import { resetUsersChildrenError } from "../store/get-users-children/get-users-children.slice";
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
  const { bookedSessionsOwnerError } = useGetBookedSessionsOwnerSelectors();
  const { bookedSessionsUserError } = useGetBookedSessionsUserSelectors();
  const {
    dispatchResetBookedSessionsOwnerError,
    dispatchResetBookedSessionsOwnerState,
  } = useBookedSessionsOwnerActions();
  const {
    dispatchResetBookedSessionsUserError,
    dispatchResetBookedSessionsUserState,
  } = useBookedSessionsUserActions();
  const { requestDateDataError } = useGetRequestDateDataSelectors();
  const {
    dispatchResetRequestDateDataError,
    dispatchResetRequestDateDataState,
  } = useRequestDateDataActions();
  const { dispatchResetCurrentDateAndTimeState } =
    useCurrentDateAndTimeActions();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { dispatchResetChooseNewPasswordState } = useChooseNewPasswordActions();
  const { dispatchResetContactFormState } = useContactFormActions();
  const { dispatchResetDeleteChildInfoState } = useDeleteChildInfoActions();
  const { dispatchResetEditChildInfoState } = useEditChildInfoActions();

  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
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
        dispatchResetChooseNewPasswordState();
        break;
      case contactRoute:
        dispatchResetContactFormState();
        break;
      case addFundsRoute:
        dispatchResetCardInputResultState();
        dispatch(resetShouldShowElementState());
        dispatch(resetWalletFundsToAddState());
        dispatch(resetPreResultHandlePaymentState());
        break;
      case paymentResultRoute:
        dispatchResetCardInputResultState();
        dispatch(resetAllHandlePaymentState());
        dispatch(resetWalletFundsToAddState());
        dispatch(resetSendEmailState());
        break;
      case bookSessionRoute:
        dispatchResetRequestDateDataState();
        dispatch(resetShouldShowElementState());
        dispatchResetCurrentDateAndTimeState();
        dispatchResetBookSessionState();
        dispatch(resetSendEmailState());
        if (sessionTypesAndPricesError) {
          dispatch(resetSessionPricesError());
        } else if (getUsersChildrenError) {
          dispatch(resetUsersChildrenError());
        } else if (bookedSessionsUserError) {
          dispatchResetBookedSessionsUserError();
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
        dispatchResetEditChildInfoState();
        break;
      case deleteChildInfoRoute:
        dispatchResetDeleteChildInfoState();
        break;
      case cancelBookingRoute:
        dispatch(resetUserBookingToDeleteState());
        break;
      case bookedSessionsOwnerRoute:
        if (bookedSessionsOwnerError) {
          dispatchResetBookedSessionsOwnerError();
        } else {
          dispatchResetBookedSessionsOwnerState();
        }
        break;
      case bookedSessionsUserRoute:
        if (bookedSessionsUserError) {
          dispatchResetBookedSessionsUserError();
        } else if (requestDateDataError) {
          dispatchResetRequestDateDataError();
        } else {
          dispatchResetBookedSessionsUserState();
          dispatchResetRequestDateDataState();
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
