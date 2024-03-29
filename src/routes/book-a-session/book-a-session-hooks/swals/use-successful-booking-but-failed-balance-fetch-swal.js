import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendEmailBookingConfirmation from "../emails/use-send-email-booking-confirmation";

import { sessionBookedBalanceUpdateFailedMessage } from "../../../../strings/infos/infos-strings";

const useSuccessfulBookingButFailedBalanceFetchSwal = () => {
  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { sendEmailBookingConfirmation } = useSendEmailBookingConfirmation();

  const successfulBookingButFailedBalanceFetchSwal = () => {
    fireSwal(
      "info",
      sessionBookedBalanceUpdateFailedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetCurrentUserWalletBalanceResult();
        dispatchResetCurrentUserWalletBalanceError();
        sendEmailBookingConfirmation();
      }
    });
  };

  return { successfulBookingButFailedBalanceFetchSwal };
};

export default useSuccessfulBookingButFailedBalanceFetchSwal;
