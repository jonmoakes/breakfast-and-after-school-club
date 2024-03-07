import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmail from "../emails/use-send-cancellation-email";

import {
  resetCurrentUserWalletBalanceError,
  resetCurrentUserWalletBalanceResult,
} from "../../../../store/user/user.slice";

import { sessionCancelledBalanceUpdateFailedMessage } from "../../../../strings/infos/infos-strings";

const useBookingCancelledButFailedBalanceFetchSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendCancellationEmail } = useSendCancellationEmail();

  const dispatch = useDispatch();

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
        dispatch(resetCurrentUserWalletBalanceResult());
        dispatch(resetCurrentUserWalletBalanceError());
        sendCancellationEmail();
      }
    });
  };

  return { bookingCancelledButFailedBalanceFetchSwal };
};

export default useBookingCancelledButFailedBalanceFetchSwal;
