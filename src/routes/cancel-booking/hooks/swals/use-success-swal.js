import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmail from "../emails/use-send-cancellation-email";

import {
  bookingCancelledMessage,
  walletBeenUpdatedMessage,
} from "../../../../strings/infos/infos-strings";

const useSuccessSwal = () => {
  const { dispatchResetCurrentUserWalletBalanceResult } =
    useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { sendCancellationEmail } = useSendCancellationEmail();

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
        sendCancellationEmail();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
