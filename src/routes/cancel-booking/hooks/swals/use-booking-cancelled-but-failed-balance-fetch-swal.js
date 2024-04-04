import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-cancellation-email-thunk";
import useGetRefundPrice from "../cancel-booking-logic/use-get-refund-price";

import { sessionCancelledBalanceUpdateFailedMessage } from "../../../../strings/infos/infos-strings";

const useBookingCancelledButFailedBalanceFetchSwal = () => {
  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { sendCancellationEmailThunk } = useSendCancellationEmailThunk();
  const { refundPrice } = useGetRefundPrice();
  const { fireSwal } = useFireSwal();

  const bookingCancelledButFailedBalanceFetchSwal = () => {
    fireSwal(
      "info",
      sessionCancelledBalanceUpdateFailedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetCurrentUserWalletBalanceResult();
        dispatchResetCurrentUserWalletBalanceError();
        sendCancellationEmailThunk(refundPrice);
      }
    });
  };

  return { bookingCancelledButFailedBalanceFetchSwal };
};

export default useBookingCancelledButFailedBalanceFetchSwal;
