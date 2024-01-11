import useFireSwal from "../../../../hooks/use-fire-swal";
import { useNavigate } from "react-router-dom";
// import useSendEmailBookingConfirmation from "../emails/use-send-email-booking-confirmation";

import {
  sessionBookedMessage,
  userBookingsRoute,
  viewBookingsMessage,
} from "../../../../strings/strings";

const useSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const nav = useNavigate();
  // const { sendEmailBookingConfirmation } = useSendEmailBookingConfirmation();

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
        nav(userBookingsRoute);

        console.log("send email here when refactored");
        // sendEmailBookingConfirmation();
      }
    });
  };

  return { successSwal };
};

export default useSuccessSwal;
