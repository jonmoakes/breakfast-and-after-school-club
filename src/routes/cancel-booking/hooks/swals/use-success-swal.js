import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendCancellationEmail from "../use-send-cancellation-email";

import {
  bookingCancelledMessage,
  walletBeenUpdatedMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
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
        sendCancellationEmail();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
