import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-cancellation-email-thunk";
import useGetRefundPrice from "../../../../hooks/use-get-refund-price";
import useCancelBookingVariables from "../use-cancel-booking-variables";

import {
  bookingCancelledMessage,
  walletBeenUpdatedMessage,
} from "../../../../strings/infos/infos-strings";

const useSuccessSwal = () => {
  const { dispatchResetCurrentUserWalletBalanceResult } =
    useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { sendCancellationEmailThunk } = useSendCancellationEmailThunk();
  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();

  const { refundPrice } = useGetRefundPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const successSwal = () => {
    fireSwal(
      "success",
      bookingCancelledMessage,
      walletBeenUpdatedMessage,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetCurrentUserWalletBalanceResult();
        sendCancellationEmailThunk(refundPrice);
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
