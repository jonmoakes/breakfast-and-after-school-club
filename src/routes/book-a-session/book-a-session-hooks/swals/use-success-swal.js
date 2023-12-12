import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendEmailBookingConfirmation from "../emails/use-send-email-booking-confirmation";

import {
  sessionBookedMessage,
  viewBookingsMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendEmailBookingConfirmation } = useSendEmailBookingConfirmation();

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
        sendEmailBookingConfirmation();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
