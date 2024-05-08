import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetRefundPrice from "../../../../hooks/use-get-refund-price";
import useCancelBookingVariables from "../use-cancel-booking-variables";
import useSendSessionSpacesAndBalanceErrorEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-session-spaces-and-balance-error-email-thunk";

import { failedToUpdateBalanceOnCancellationMessage } from "../../../../strings/errors/errors-strings";

const useUpdateSessionSpacesAndBalanceErrorSwal = () => {
  const { sessionType, numberOfChildrenInBooking } =
    useCancelBookingVariables();
  const { refundPrice } = useGetRefundPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const { fireSwal } = useFireSwal();
  const { sendSessionSpacesAndBalanceErrorEmailThunk } =
    useSendSessionSpacesAndBalanceErrorEmailThunk();

  // the session spaces - and therefore the users balance have failed to update here. However the user doesn't need to know about the session spaces as it doesn't affect them.. so we tell them that their balance has not updated and all the relevent data to reset session spaces and update the users balance will be sent in the email to the app owner.

  const updateSessionSpacesAndBalanceErrorSwal = () => {
    fireSwal(
      "info",
      failedToUpdateBalanceOnCancellationMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        sendSessionSpacesAndBalanceErrorEmailThunk(
          numberOfChildrenInBooking,
          refundPrice
        );
      }
    });
  };

  return { updateSessionSpacesAndBalanceErrorSwal };
};

export default useUpdateSessionSpacesAndBalanceErrorSwal;
