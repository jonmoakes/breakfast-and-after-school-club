import useFireSwal from "../../../../hooks/use-fire-swal";

import useBookRecurringSessionsVariables from "../use-book-recurring-sessions-variables";
import useSendAddBookingInfoErrorEmailThunk from "../../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-add-booking-info-error-email-thunk";
import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";

import { addRecurringSessionsBookingInfoErrorMessage } from "../../../../strings/errors/errors-strings";

const useRecurringSessionsAddBookingInfoErrorSwal = () => {
  const { bookingsToAdd, sessionChoice, usersChildren } =
    useBookRecurringSessionsVariables();
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();
  const { fireSwal } = useFireSwal();
  const { sendAddBookingInfoErrorEmailThunk } =
    useSendAddBookingInfoErrorEmailThunk();

  const recurringSessionsAddBookingInfoErrorSwal = () => {
    fireSwal(
      "error",
      addRecurringSessionsBookingInfoErrorMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        const date = bookingsToAdd.map((booking) => booking.date).join(", ");
        const sessionType = sessionChoice;
        sendAddBookingInfoErrorEmailThunk(
          date,
          sessionType,
          childrenSelectedForBooking,
          usersChildren
        );
      }
    });
  };

  return { recurringSessionsAddBookingInfoErrorSwal };
};

export default useRecurringSessionsAddBookingInfoErrorSwal;
