import { useDispatch } from "react-redux";

import { resetAllChildInfoState } from "../../../store/add-child-info/add-child-info.slice";
import { resetBookSessionState } from "../../../store/book-session/book-session.slice";
import { resetBookedSessionsState } from "../../../store/booked-sessions/booked-sessions.slice";
import { resetCardInputState } from "../../../store/card-input-result/card-input-result.slice";
import { resetChosenEntryChildDetailsState } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.slice";
import { resetContactFormState } from "../../../store/contact-form/contact-form.slice";
import { resetDateAndTimeState } from "../../../store/date-and-time/date-and-time.slice";
import { resetDeleteChildInfoState } from "../../../store/delete-child-info/delete-child-info.slice";
import { resetEditChildInfoState } from "../../../store/edit-child-info/edit-child-info.slice";
import { resetForgotPasswordRequestState } from "../../../store/forgot-password-request/forgot-password-request.slice";
import { resetForgotPasswordResultState } from "../../../store/forgot-password-result/forgot-password-result.slice";
import { resetAllGetUsersChildrenState } from "../../../store/get-users-children/get-users-children-slice";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";
import { resetIsOnlineState } from "../../../store/is-online/is-online.slice";
import { resetMagicUrlRequestState } from "../../../store/magic-url-request/magic-url-request.slice";
import { resetPasswordIsVisibleState } from "../../../store/password-is-visible/password-is-visible.slice";
import { resetRequestDateDataState } from "../../../store/request-date-data/request-date-data.slice";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import { resetSessionTypesAndPricesState } from "../../../store/session-types-and-prices/session-types-and-prices.slice";
import { resetShouldShowElementState } from "../../../store/should-show-element/should-show-element.slice";
import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../../../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../../../store/update-email/update-email.slice";
import { resetUpdatePasswordRequestState } from "../../../store/update-password-request/update-password-request.slice";
import { resetUpdatePasswordResultState } from "../../../store/update-password-result/update-password-result.slice";
import { resetBookingToDeleteState } from "../../../store/user-booking-to-delete/user-booking-to-delete.slice";
import { resetUserBookingsState } from "../../../store/user-bookings/user-bookings.slice";
import { resetWalletFundsToAddState } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetAllChildInfoState());
    dispatch(resetBookSessionState());
    dispatch(resetBookedSessionsState());
    dispatch(resetCardInputState());
    dispatch(resetChosenEntryChildDetailsState());
    dispatch(resetContactFormState());
    dispatch(resetDateAndTimeState());
    dispatch(resetDeleteChildInfoState());
    dispatch(resetEditChildInfoState());
    dispatch(resetForgotPasswordRequestState());
    dispatch(resetForgotPasswordResultState());
    dispatch(resetAllGetUsersChildrenState());
    dispatch(resetAllHandlePaymentState());
    dispatch(resetIsOnlineState());
    dispatch(resetMagicUrlRequestState());
    dispatch(resetPasswordIsVisibleState());
    dispatch(resetRequestDateDataState());
    dispatch(resetSendEmailState());
    dispatch(resetSessionTypesAndPricesState());
    dispatch(resetShouldShowElementState());
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetUpdateEmailState());
    dispatch(resetUpdatePasswordRequestState());
    dispatch(resetUpdatePasswordResultState());
    dispatch(resetBookingToDeleteState());
    dispatch(resetUserBookingsState());
    dispatch(resetWalletFundsToAddState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
