import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmail from "../emails/use-send-cancellation-email";

import { resetCurrentUserWalletBalanceResult } from "../../../../store/user/user.slice";

import {
  bookingCancelledMessage,
  walletBeenUpdatedMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendCancellationEmail } = useSendCancellationEmail();

  const dispatch = useDispatch();

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
        dispatch(resetCurrentUserWalletBalanceResult());
        sendCancellationEmail();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
