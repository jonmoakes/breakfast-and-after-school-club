import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetRefundPrice from "../../../../hooks/use-get-refund-price";
import useSendBalanceNotUpdatedErrorEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-balance-not-updated-error-email-thunk";

import { failedToUpdateBalanceOnCancellationMessage } from "../../../../strings/errors/errors-strings";
import useCancelBookingVariables from "../use-cancel-booking-variables";

const useUpdateBalanceErrorSwal = () => {
  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();
  const { refundPrice } = useGetRefundPrice(
    sessionType,
    numberOfChildrenInBooking
  );
  const { fireSwal } = useFireSwal();
  const { sendBalanceNotUpdatedErrorEmailThunk } =
    useSendBalanceNotUpdatedErrorEmailThunk();

  const updateBalanceErrorSwal = () => {
    fireSwal(
      "error",
      failedToUpdateBalanceOnCancellationMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        sendBalanceNotUpdatedErrorEmailThunk(refundPrice);
      }
    });
  };

  return { updateBalanceErrorSwal };
};

export default useUpdateBalanceErrorSwal;
