import useSendCancellationConfirmationEmailThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/cancel-booking/use-send-cancellation-confirmation-email-thunk";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { shouldSendCancelledBookingEmailMessage } from "../../../../strings/confirms/confirms-strings";
import { sendEmailButtonText } from "../../../../strings/infos/infos-strings";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";
import { bookingCancelledMessage } from "../../../../strings/successes/successes-strings";

const useCancelBookingSuccessSwal = () => {
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendCancellationConfirmationEmailThunk } =
    useSendCancellationConfirmationEmailThunk();

  const cancelBookingSuccessSwal = () => {
    const confirmResult = () => {
      sendCancellationConfirmationEmailThunk();
    };

    const cancelResult = () => {
      hamburgerHandlerNavigate(databaseManagementRoute);
    };

    confirmSwal(
      bookingCancelledMessage,
      shouldSendCancelledBookingEmailMessage,
      sendEmailButtonText,
      confirmResult,
      cancelResult
    );
  };

  return { cancelBookingSuccessSwal };
};

export default useCancelBookingSuccessSwal;
