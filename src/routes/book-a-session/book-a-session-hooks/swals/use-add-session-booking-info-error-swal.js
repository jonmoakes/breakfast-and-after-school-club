import useFireSwal from "../../../../hooks/use-fire-swal";
import useConditionalLogic from "../use-conditional-logic";
import useSendAddBookingInfoErrorEmail from "../emails/use-send-add-booking-info-error-email";

import { addSessionBookingInfoErrorMessage } from "../../../../strings/errors/errors-strings";

const useAddSessionBookingInfoErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { date } = useConditionalLogic();

  //passing the date to stop it being undefined as store is cleared by the time we get there if you try to select it in the hook itself
  const { sendAddBookingInfoErrorEmail } =
    useSendAddBookingInfoErrorEmail(date);

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
