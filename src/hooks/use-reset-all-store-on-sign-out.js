import { useDispatch } from "react-redux";

import useAddChildInfoActions from "./get-actions-and-thunks/add-child-info-actions-and-thunks/use-add-child-info-actions";
import useBookSessionActions from "./get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useBookedSessionsOwnerActions from "./get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useBookedSessionsUserActions from "./get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-booked-session-user-actions";
import useCurrentDateAndTimeActions from "./get-actions-and-thunks/use-current-date-and-time-actions";
import useRequestDateDataActions from "./get-actions-and-thunks/use-request-date-data-actions";
import useCardInputResultActions from "./get-actions-and-thunks/use-card-input-result-actions";
import useChooseNewPasswordActions from "./get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useChosenEntryChildDetailsActions from "./get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-chosen-entry-child-details-actions";
import useContactFormActions from "./get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useDeleteChildInfoActions from "./get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "./get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";
import useGenerateNewPasswordRequestActions from "./get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-actions";
import useGetAllChildrenActions from "./get-actions-and-thunks/get-all-children-actions-and-thunks/use-get-all-children-actions";
import useGetAllUsersActions from "./get-actions-and-thunks/get-all-users-actions-and-thunks/use-get-all-users-actions";

import { resetGetUsersChildrenState } from "../store/get-users-children/get-users-children.slice";
import { resetAllHandlePaymentState } from "../store/handle-payment/handle-payment.slice";
import { resetIsOnlineState } from "../store/is-online/is-online.slice";
import { resetPasswordIsVisibleState } from "../store/password-is-visible/password-is-visible.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetSessionTypesAndPricesState } from "../store/session-types-and-prices/session-types-and-prices.slice";
import { resetShouldShowElementState } from "../store/should-show-element/should-show-element.slice";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../store/update-email/update-email.slice";
import { resetUserBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";
import { resetWalletFundsToAddState } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useResetAllStoreOnSignOut = () => {
  const { dispatchResetAllAddChildInfoState } = useAddChildInfoActions();
  const { dispatchResetBookSessionState } = useBookSessionActions();
  const { dispatchResetBookedSessionsOwnerState } =
    useBookedSessionsOwnerActions();
  const { dispatchResetBookedSessionsUserState } =
    useBookedSessionsUserActions();
  const { dispatchResetCurrentDateAndTimeState } =
    useCurrentDateAndTimeActions();
  const { dispatchResetRequestDateDataState } = useRequestDateDataActions();
  const { dispatchResetCardInputResultState } = useCardInputResultActions();
  const { dispatchResetChooseNewPasswordState } = useChooseNewPasswordActions();
  const { dispatchResetChosenEntryChildDetailsState } =
    useChosenEntryChildDetailsActions();
  const { dispatchResetContactFormState } = useContactFormActions();
  const { dispatchResetDeleteChildInfoState } = useDeleteChildInfoActions();
  const { dispatchResetEditChildInfoState } = useEditChildInfoActions();
  const { dispatchResetGenerateNewPasswordRequestState } =
    useGenerateNewPasswordRequestActions();
  const { dispatchResetGetAllChildrenState } = useGetAllChildrenActions();
  const { dispatchResetGetAllUsersState } = useGetAllUsersActions();

  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatchResetAllAddChildInfoState();
    dispatchResetBookSessionState();
    dispatchResetBookedSessionsOwnerState();
    dispatchResetBookedSessionsUserState();
    dispatchResetCurrentDateAndTimeState();
    dispatchResetRequestDateDataState();
    dispatchResetCardInputResultState();
    dispatchResetChooseNewPasswordState();
    dispatchResetChosenEntryChildDetailsState();
    dispatchResetContactFormState();
    dispatchResetDeleteChildInfoState();
    dispatchResetEditChildInfoState();
    dispatchResetGenerateNewPasswordRequestState();
    dispatchResetGetAllChildrenState();
    dispatchResetGetAllUsersState();

    dispatch(resetGetUsersChildrenState());
    dispatch(resetAllHandlePaymentState());
    dispatch(resetIsOnlineState());
    dispatch(resetPasswordIsVisibleState());
    dispatch(resetSendEmailState());
    dispatch(resetSessionTypesAndPricesState());
    dispatch(resetShouldShowElementState());
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetUpdateEmailState());
    dispatch(resetUserBookingToDeleteState());
    dispatch(resetWalletFundsToAddState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
