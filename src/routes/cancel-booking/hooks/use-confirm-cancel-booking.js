import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "../../../hooks/use-get-refund-price";
import useCancelBookingVariables from "./use-cancel-booking-variables";
import useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk from "../../../hooks/get-actions-and-thunks/user-booking-to-delete-actions-and-thunks/use-delete-user-booking-update-session-spaces-doc-refund-user-get-wallet-balance-thunk";

import {
  confirmCancelBookingMessage,
  fundsReaddedToAccountMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChildInfo = () => {
  const {
    deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk,
  } =
    useDeleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk();

  const { confirmSwal } = useConfirmSwal();

  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();
  const { refundPrice, formattedRefundPrice } = useGetRefundPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const confirmResult = () => {
    deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk(
      numberOfChildrenInBooking,
      refundPrice
    );
  };

  const confirmCancelBooking = () => {
    confirmSwal(
      confirmCancelBookingMessage,
      fundsReaddedToAccountMessage(formattedRefundPrice),
      imSureMessage,
      confirmResult
    );
  };

  return { confirmCancelBooking };
};

export default useConfirmDeleteChildInfo;
