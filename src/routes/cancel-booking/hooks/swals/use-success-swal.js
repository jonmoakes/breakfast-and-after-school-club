import { useNavigate } from "react-router-dom";
import useFireSwal from "../../../../hooks/use-fire-swal";
// import useSendCancellationEmail from "../emails/use-send-cancellation-email";

import {
  bookingCancelledMessage,
  userBookingsRoute,
  walletBeenUpdatedMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const nav = useNavigate();
  // const { sendCancellationEmail } = useSendCancellationEmail();

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
        console.log("send email when refactored");
        nav(userBookingsRoute);
        // sendCancellationEmail();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
