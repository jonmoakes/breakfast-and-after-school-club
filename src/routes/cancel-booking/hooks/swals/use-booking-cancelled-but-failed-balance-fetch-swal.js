import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmail from "../emails/use-send-cancellation-email";

import { sessionCancelledBalanceUpdateFailedMessage } from "../../../../strings/infos/infos-strings";

const useBookingCancelledButFailedBalanceFetchSwal = () => {
  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { sendCancellationEmail } = useSendCancellationEmail();

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
        sendCancellationEmail();
      }
    });
  };

  return { bookingCancelledButFailedBalanceFetchSwal };
};

export default useBookingCancelledButFailedBalanceFetchSwal;
