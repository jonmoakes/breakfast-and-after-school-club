import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetAllChildInfoState } from "../store/add-child-info/add-child-info.slice";
import { resetBookSessionState } from "../store/book-session/book-session.slice";
import { resetBookedSessionsState } from "../store/booked-sessions/booked-sessions.slice";
import { resetCardInputState } from "../store/card-input-result/card-input-result.slice";
import { resetChosenEntryChildDetailsState } from "../store/chosen-entry-child-details/chosen-entry-child-details.slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";
import { resetDateAndTimeState } from "../store/date-and-time/date-and-time.slice";
import { resetDeleteChildInfoState } from "../store/delete-child-info/delete-child-info.slice";
import { resetEditChildInfoState } from "../store/edit-child-info/edit-child-info.slice";
import { resetGetUsersChildrenState } from "../store/get-users-children/get-users-children.slice";
import { resetAllHandlePaymentState } from "../store/handle-payment/handle-payment.slice";
import { resetIsOnlineState } from "../store/is-online/is-online.slice";
import { resetPasswordIsVisibleState } from "../store/password-is-visible/password-is-visible.slice";
import { resetRequestDateDataState } from "../store/request-date-data/request-date-data.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetSessionTypesAndPricesState } from "../store/session-types-and-prices/session-types-and-prices.slice";
import { resetShouldShowElementState } from "../store/should-show-element/should-show-element.slice";
import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetUpdateEmailState } from "../store/update-email/update-email.slice";
import { resetBookingToDeleteState } from "../store/user-booking-to-delete/user-booking-to-delete.slice";
import { resetUserBookingsState } from "../store/user-bookings/user-bookings.slice";
import { resetWalletFundsToAddState } from "../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";
import { resetChooseNewPasswordState } from "../store/choose-new-password/choose-new-password.slice";
import { signInRoute } from "../strings/strings";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(resetGenerateNewPasswordRequestState());
    dispatch(resetGetUsersChildrenState());
    dispatch(resetAllHandlePaymentState());
    dispatch(resetIsOnlineState());
    dispatch(resetPasswordIsVisibleState());
    dispatch(resetRequestDateDataState());
    dispatch(resetSendEmailState());
    dispatch(resetSessionTypesAndPricesState());
    dispatch(resetShouldShowElementState());
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetUpdateEmailState());
    dispatch(resetBookingToDeleteState());
    dispatch(resetUserBookingsState());
    dispatch(resetWalletFundsToAddState());
    dispatch(resetChooseNewPasswordState());
    navigate(signInRoute);
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
