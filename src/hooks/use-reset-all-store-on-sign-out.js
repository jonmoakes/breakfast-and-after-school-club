import useAddChildInfoActions from "./get-actions-and-thunks/add-child-info-actions-and-thunks/use-add-child-info-actions";
import useBookSessionActions from "./get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useBookedSessionsOwnerActions from "./get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useBookedSessionsUserActions from "./get-actions-and-thunks/booked-sessions-user-actions-and-thunks/use-booked-session-user-actions";
import useRequestDateDataActions from "./get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-date-data-actions";
import useCardInputResultActions from "./get-actions-and-thunks/use-card-input-result-actions";
import useChooseNewPasswordActions from "./get-actions-and-thunks/choose-new-password-actions-and-thunks/use-choose-new-password-actions";
import useChosenEntryChildDetailsActions from "./get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-chosen-entry-child-details-actions";
import useContactFormActions from "./get-actions-and-thunks/contact-form-actions-and-thunks/use-contact-form-actions";
import useDeleteChildInfoActions from "./get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";
import useEditChildInfoActions from "./get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";
import useGenerateNewPasswordRequestActions from "./get-actions-and-thunks/generate-new-password-request-actions-and-thunks/use-generate-new-password-request-actions";
import useGetAllChildrenActions from "./get-actions-and-thunks/get-all-children-actions-and-thunks/use-get-all-children-actions";
import useGetAllUsersActions from "./get-actions-and-thunks/get-all-users-actions-and-thunks/use-get-all-users-actions";
import useGetUsersChildrenActions from "./get-actions-and-thunks/get-users-children-actions-and-thunks/use-get-users-children-actions";
import useHandlePaymentActions from "./get-actions-and-thunks/handle-payment-actions-and-thunks/use-handle-payment-actions";
import usePasswordIsVisibleActions from "./get-actions-and-thunks/use-password-is-visible-actions";
import useSendEmailActions from "./get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-actions";
import useSessionTypesAndPricesActions from "./get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-session-types-and-prices-actions";
import useShouldShowElementActions from "./get-actions-and-thunks/use-should-show-element-actions";
import useSignInFormActions from "./get-actions-and-thunks/use-sign-in-form-actions";
import useSignUpFormActions from "./get-actions-and-thunks/use-sign-up-form-actions";
import useUpdateEmailActions from "./get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
import useUserBookingToDeleteActions from "./get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-user-booking-to-delete-actions";
import useCurrentUserActions from "./get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useDatabaseManagementActions from "./get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useEmergencyContactDetailsActions from "./get-actions-and-thunks/emergency-contact-details-actions-and-thunks/use-emergency-contact-details-actions";
import useBookRecurringSessionsActions from "./get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-book-recurring-sessions-actions";
const useResetAllStoreOnSignOut = () => {
  const { dispatchResetAllAddChildInfoState } = useAddChildInfoActions();
  const { dispatchResetBookSessionState } = useBookSessionActions();
  const { dispatchResetBookedSessionsOwnerState } =
    useBookedSessionsOwnerActions();
  const { dispatchResetBookedSessionsUserState } =
    useBookedSessionsUserActions();
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
  const { dispatchResetUsersChildrenState } = useGetUsersChildrenActions();
  const { dispatchResetAllHandlePaymentState } = useHandlePaymentActions();
  const { dispatchResetPasswordIsVisibleState } = usePasswordIsVisibleActions();
  const { dispatchResetSendEmailState } = useSendEmailActions();
  const { dispatchResetSessionTypesAndPricesState } =
    useSessionTypesAndPricesActions();
  const { dispatchResetShouldShowElementState } = useShouldShowElementActions();
  const { dispatchResetSignInFormState } = useSignInFormActions();
  const { dispatchResetSignUpFormState } = useSignUpFormActions();
  const { dispatchResetUpdateEmailState } = useUpdateEmailActions();
  const { dispatchResetUserBookingToDeleteState } =
    useUserBookingToDeleteActions();
  const { dispatchResetWalletFundsToAdd } = useCurrentUserActions();
  const { dispatchResetDatabaseManagementState } =
    useDatabaseManagementActions();
  const { dispatchResetEmergencyContactDetailsState } =
    useEmergencyContactDetailsActions();
  const { dispatchResetBookRecurringSessionsState } =
    useBookRecurringSessionsActions();

  const resetAllStoreOnSignOut = () => {
    dispatchResetAllAddChildInfoState();
    dispatchResetBookSessionState();
    dispatchResetBookedSessionsOwnerState();
    dispatchResetBookedSessionsUserState();
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
    dispatchResetUsersChildrenState();
    dispatchResetAllHandlePaymentState();
    dispatchResetPasswordIsVisibleState();
    dispatchResetSendEmailState();
    dispatchResetSessionTypesAndPricesState();
    dispatchResetSignInFormState();
    dispatchResetSignUpFormState();
    dispatchResetShouldShowElementState();
    dispatchResetUpdateEmailState();
    dispatchResetUserBookingToDeleteState();
    dispatchResetWalletFundsToAdd();
    dispatchResetDatabaseManagementState();
    dispatchResetEmergencyContactDetailsState();
    dispatchResetBookRecurringSessionsState();
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
