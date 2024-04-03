import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetRefundPrice from "./use-get-refund-price";
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
  const { refundPrice, numberOfChildrenInBooking } = useGetRefundPrice();

  const confirmResult = () => {
    deleteUserBookingUpdateSessionSpacesDocRefundUserGetWalletBalanceThunk(
      numberOfChildrenInBooking,
      refundPrice
    );
  };

  const confirmCancelBooking = () => {
    confirmSwal(
      confirmCancelBookingMessage,
      fundsReaddedToAccountMessage(refundPrice / 100),
      imSureMessage,
      confirmResult
    );
  };

  return { confirmCancelBooking };
};

export default useConfirmDeleteChildInfo;
