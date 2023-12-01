import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendAddBookingInfoErrorEmail from "../use-send-add-booking-info-error-email";

import { addSessionBookingInfoErrorMessage } from "../../../../strings/strings";

const useAddSessionBookingInfoErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const { sendAddBookingInfoErrorEmail } = useSendAddBookingInfoErrorEmail();

  const addSessionBookingInfoErrorSwal = () => {
    fireSwal(
      "error",
      addSessionBookingInfoErrorMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        sendAddBookingInfoErrorEmail();
      }
    });
  };

  return { addSessionBookingInfoErrorSwal };
};

export default useAddSessionBookingInfoErrorSwal;
