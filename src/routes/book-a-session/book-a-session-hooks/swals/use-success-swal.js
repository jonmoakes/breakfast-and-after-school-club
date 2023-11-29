import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendEmailBookingConfirmation from "../use-send-email-booking-confirmation";

import {
  sessionBookedMessage,
  viewBookingsMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendEmailConfirmation } = useSendEmailBookingConfirmation();

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
        sendEmailConfirmation();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
