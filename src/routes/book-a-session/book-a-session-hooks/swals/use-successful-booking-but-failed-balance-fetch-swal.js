import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendEmailBookingConfirmation from "../emails/use-send-email-booking-confirmation";

import {
  resetCurrentUserWalletBalanceResult,
  resetCurrentUserWalletBalanceError,
} from "../../../../store/user/user.slice";

import { sessionBookedBalanceUpdateFailedMessage } from "../../../../strings/errors/errors-strings";

const useSuccessfulBookingButFailedBalanceFetchSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendEmailBookingConfirmation } = useSendEmailBookingConfirmation();

  const dispatch = useDispatch();

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
        dispatch(resetCurrentUserWalletBalanceResult());
        dispatch(resetCurrentUserWalletBalanceError());
        sendEmailBookingConfirmation();
      }
    });
  };

  return { successfulBookingButFailedBalanceFetchSwal };
};

export default useSuccessfulBookingButFailedBalanceFetchSwal;
