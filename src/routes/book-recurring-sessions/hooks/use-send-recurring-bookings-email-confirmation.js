import { format } from "date-fns";

import useGetBookSessionSelectors from "../../../hooks/get-selectors/use-get-book-session-selectors";
import useSendEmailRecurringBookingsConfirmationThunk from "../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-recurring-bookings-confirmation-thunk";
import useBookRecurringSessionsVariables from "./use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "./use-recurring-sessions-functions";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

const useSendRecurringBookingsEmailConfirmation = () => {
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();
  const { bookingData, totalCost } = useRecurringSessionsFunctions();
  const { sessionChoice, usersChildren } = useBookRecurringSessionsVariables();
  const { sendEmailRecurringBookingsConfirmationThunk } =
    useSendEmailRecurringBookingsConfirmationThunk();

  const sendRecurringBookingsEmailConfirmation = () => {
    const formattedBookingDates = bookingData
      .map((data) => (data ? format(new Date(data.date), "dd MMMM yyyy") : ""))
      .join(", ");

    const childrenInBooking = createChildrenToAddToBooking(
      childrenSelectedForBooking,
      usersChildren
    );
    const sessionPrice = totalCost();

    sendEmailRecurringBookingsConfirmationThunk(
      formattedBookingDates,
      sessionChoice,
      childrenInBooking,
      sessionPrice
    );
  };

  return { sendRecurringBookingsEmailConfirmation };
};

export default useSendRecurringBookingsEmailConfirmation;
