import { useLocation } from "react-router-dom";

import useAddChildInfoActions from "./get-actions-and-thunks/add-child-info-actions-and-thunks/use-add-child-info-actions";
import useBookSessionActions from "./get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useGetBookedSessionsOwnerSelectors from "./get-selectors/use-get-booked-sessions-owner-selectors";
import useGetBookedSessionsUserSelectors from "./get-selectors/use-get-booked-sessions-user-selectors";
import useBookedSessionsOwnerActions from "./get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useBookedSessionsUserActions from "./get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-booked-session-user-actions";
import useGetRequestDateDataSelectors from "./get-selectors/use-get-request-date-data-selectors";
import useRequestDateDataActions from "./get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-date-data-actions";
import useCardInputResultActions from "./get-actions-and-thunks/use-card-input-result-actions";
import useChooseNewPasswordActions from "./get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useContactFormActions from "./get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useDeleteChildInfoActions from "./get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "./get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";
import useGenerateNewPasswordRequestActions from "./get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-actions";
import useGetAllChildrenSelectors from "./get-selectors/use-get-all-children-selectors";
import useGetAllChildrenActions from "./get-actions-and-thunks/get-all-children-actions-and-thunks/use-get-all-children-actions";
import useGetAllUsersSelectors from "./get-selectors/use-get-all-users-selectors";
import useGetAllUsersActions from "./get-actions-and-thunks/get-all-users-actions-and-thunks/use-get-all-users-actions";
import useGetUsersChildrenSelectors from "./get-selectors/use-get-users-children-selectors";
import useGetUsersChildrenActions from "./get-actions-and-thunks/get-users-children-actions-and-thunks/use-get-users-children-actions";
import useHandlePaymentActions from "./get-actions-and-thunks/handle-payment-actions-and-thunks/use-handle-payment-actions";
import useSendEmailActions from "./get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-actions";
import useGetSessionTypesAndPricesSelectors from "./get-selectors/use-get-session-types-and-prices-selectors";
import useSessionTypesAndPricesActions from "./get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-session-types-and-prices-actions";
import useShouldShowElementActions from "./get-actions-and-thunks/use-should-show-element-actions";
import useSignInFormActions from "./get-actions-and-thunks/use-sign-in-form-actions";
import useSignUpFormActions from "./get-actions-and-thunks/use-sign-up-form-actions";
import useUpdateEmailActions from "./get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
import useUserBookingToDeleteActions from "./get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-user-booking-to-delete-actions";
import useCurrentUserActions from "./get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useGetDatabaseManagementSelectors from "./get-selectors/use-get-database-management-selectors";
import useDatabaseManagementActions from "./get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

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
  chooseNewPasswordRoute,
  bookedSessionsUserRoute,
  allChildrenRoute,
  allUsersRoute,
  childInfoRoute,
  databaseManagementViewBookingClosingTimesRoute,
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
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { dispatchResetChooseNewPasswordState } = useChooseNewPasswordActions();
  const { dispatchResetContactFormState } = useContactFormActions();
  const { dispatchResetDeleteChildInfoState } = useDeleteChildInfoActions();
  const { dispatchResetEditChildInfoState } = useEditChildInfoActions();
  const { dispatchResetGenerateNewPasswordRequestState } =
    useGenerateNewPasswordRequestActions();
  const { getAllChildrenError } = useGetAllChildrenSelectors();
  const { dispatchResetGetAllChildrenError, dispatchResetGetAllChildrenState } =
    useGetAllChildrenActions();
  const { getAllUsersError } = useGetAllUsersSelectors();
  const { dispatchResetGetAllUsersError, dispatchResetGetAllUsersState } =
    useGetAllUsersActions();
  const { getUsersChildrenError } = useGetUsersChildrenSelectors();
  const { dispatchResetUsersChildrenError, dispatchResetUsersChildrenState } =
    useGetUsersChildrenActions();
  const {
    dispatchResetPreResultHandlePaymentState,
    dispatchResetAllHandlePaymentState,
  } = useHandlePaymentActions();
  const { dispatchResetSendEmailState } = useSendEmailActions();
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();
  const { dispatchResetSessionPricesError } = useSessionTypesAndPricesActions();
  const { dispatchResetShouldShowElementState } = useShouldShowElementActions();
  const { dispatchResetSignInFormState } = useSignInFormActions();
  const { dispatchResetSignUpFormState } = useSignUpFormActions();
  const { dispatchResetUpdateEmailState } = useUpdateEmailActions();
  const { dispatchResetUserBookingToDeleteState } =
    useUserBookingToDeleteActions();
  const { dispatchResetWalletFundsToAdd } = useCurrentUserActions();
  const { databaseManagementError } = useGetDatabaseManagementSelectors();
  const {
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementState,
  } = useDatabaseManagementActions();

  const location = useLocation();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatchResetShouldShowElementState();
        dispatchResetSignInFormState();
        break;
      case signUpRoute:
        dispatchResetShouldShowElementState();
        dispatchResetSignUpFormState();
        break;
      case forgotPasswordRequestRoute:
        dispatchResetGenerateNewPasswordRequestState();
        break;
      case chooseNewPasswordRoute:
        dispatchResetChooseNewPasswordState();
        break;
      case contactRoute:
        dispatchResetContactFormState();
        break;
      case addFundsRoute:
        dispatchResetCardInputResultState();
        dispatchResetShouldShowElementState();
        dispatchResetWalletFundsToAdd();
        dispatchResetPreResultHandlePaymentState();
        break;
      case paymentResultRoute:
        dispatchResetCardInputResultState();
        dispatchResetAllHandlePaymentState();
        dispatchResetWalletFundsToAdd();
        dispatchResetSendEmailState();
        break;
      case bookSessionRoute:
        dispatchResetRequestDateDataState();
        dispatchResetShouldShowElementState();
        dispatchResetBookSessionState();
        dispatchResetSendEmailState();
        if (sessionTypesAndPricesError) {
          dispatchResetSessionPricesError();
        } else if (getUsersChildrenError) {
          dispatchResetUsersChildrenError();
        } else if (bookedSessionsUserError) {
          dispatchResetBookedSessionsUserError();
        }
        break;
      case updateEmailRoute:
        dispatchResetShouldShowElementState();
        dispatchResetUpdateEmailState();
        break;
      case childInfoRoute:
        if (getUsersChildrenError) {
          dispatchResetUsersChildrenError();
        } else {
          dispatchResetUsersChildrenState();
        }
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
        dispatchResetUserBookingToDeleteState();
        dispatchResetSendEmailState();
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
          dispatchResetGetAllChildrenError();
        } else {
          dispatchResetGetAllChildrenState();
        }
        break;
      case allUsersRoute:
        if (getAllUsersError) {
          dispatchResetGetAllUsersError();
        } else {
          dispatchResetGetAllUsersState();
        }
        break;
      case databaseManagementViewBookingClosingTimesRoute:
        if (databaseManagementError) {
          dispatchResetDatabaseManagementError();
        } else {
          dispatchResetDatabaseManagementState();
        }
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
