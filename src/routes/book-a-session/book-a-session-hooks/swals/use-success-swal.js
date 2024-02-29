import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";

import useSendEmailBookingConfirmation from "../emails/use-send-email-booking-confirmation";

import { resetCurrentUserWalletBalanceResult } from "../../../../store/user/user.slice";

import {
  sessionBookedMessage,
  viewBookingsMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendEmailBookingConfirmation } = useSendEmailBookingConfirmation();

  const dispatch = useDispatch();

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
        dispatch(resetCurrentUserWalletBalanceResult());
        sendEmailBookingConfirmation();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
