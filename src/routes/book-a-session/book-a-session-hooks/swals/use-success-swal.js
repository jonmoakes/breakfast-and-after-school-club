import useCurrentUserActions from "../../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendEmailConfirmation from "../use-send-email-confirmation";

import {
  sessionBookedMessage,
  viewBookingsMessage,
} from "../../../../strings/successes/successes-strings";

const useSuccessSwal = () => {
  const { dispatchResetCurrentUserWalletBalanceResult } =
    useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { sendEmailConfirmation } = useSendEmailConfirmation();

  const successSwal = () => {
    fireSwal(
      "success",
      sessionBookedMessage,
      viewBookingsMessage,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetCurrentUserWalletBalanceResult();
        sendEmailConfirmation();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
