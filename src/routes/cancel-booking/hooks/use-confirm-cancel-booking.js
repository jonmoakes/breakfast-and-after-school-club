import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetSessionPrice from "../../../hooks/use-get-session-price";
import useCancelBookingVariables from "./use-cancel-booking-variables";
import useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk from "../../../hooks/get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-delete-user-booking-update-session-spaces-doc-refund-user-get-wallet-balance-thunk";

import {
  confirmCancelBookingMessage,
  fundsReaddedToAccountMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmCancelBooking = () => {
  const {
    deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk,
  } =
    useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk();

  const { confirmSwal } = useConfirmSwal();

  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();

  const { sessionPrice, formattedSessionPrice } = useGetSessionPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const confirmResult = () => {
    deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk(
      numberOfChildrenInBooking,
      sessionPrice
    );
  };

  const confirmCancelBooking = () => {
    confirmSwal(
      confirmCancelBookingMessage,
      fundsReaddedToAccountMessage(formattedSessionPrice),
      "yes, cancel booking!",
      confirmResult
    );
  };

  return { confirmCancelBooking };
};

export default useConfirmCancelBooking;
