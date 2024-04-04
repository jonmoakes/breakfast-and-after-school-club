import useFireSwal from "../../../../hooks/use-fire-swal";
import useDatesLogic from "../logic/use-dates-logic";
import useGetChildrenLogic from "../logic/use-get-children-logic";
import useSessionLogic from "../logic/use-session-logic";
import useSendAddBookingInfoErrorEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-add-booking-info-error-email-thunk";

import { addSessionBookingInfoErrorMessage } from "../../../../strings/errors/errors-strings";

const useAddSessionBookingInfoErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { date } = useDatesLogic();
  const { childrenSelectedForBooking, usersChildren } = useGetChildrenLogic();
  const { sessionType } = useSessionLogic();
  const { sendAddBookingInfoErrorEmailThunk } =
    useSendAddBookingInfoErrorEmailThunk();

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
        sendAddBookingInfoErrorEmailThunk(
          date,
          sessionType,
          childrenSelectedForBooking,
          usersChildren
        );
      }
    });
  };

  return { addSessionBookingInfoErrorSwal };
};

export default useAddSessionBookingInfoErrorSwal;
