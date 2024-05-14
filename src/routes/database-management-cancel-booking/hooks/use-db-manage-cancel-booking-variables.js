import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionPrice from "../../../hooks/use-get-session-price";
import useBookedSessionsOwnerVariables from "../../booked-sessions-owner/booked-sessions-owner-hooks/use-booked-sessions-owner-variables";

import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";
import { format, parseISO } from "date-fns";

const useDbManageCancelBookingVariables = () => {
  const {
    databaseManagementIsLoading,
    bookingToCancelDetails,
    sessionDate,
    sessionChildren,
    typeOfSession,
    userIdOfParent,
    bookingId,
    userOfAppChoice,
  } = useGetDatabaseManagementSelectors();
  const { bookedSessionsOwnerIsLoading } = useBookedSessionsOwnerVariables();
  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(sessionChildren);
  const { sessionPrice } = useGetSessionPrice(
    typeOfSession,
    numberOfChildrenInBooking
  );

  const matchedBookingFound =
    Object.keys(bookingToCancelDetails).length && true;

  const dateAsDateObject = sessionDate ? parseISO(sessionDate) : sessionDate;
  const formattedDate = dateAsDateObject
    ? format(dateAsDateObject, "EEEE dd MMMM yyyy")
    : sessionDate;

  return {
    databaseManagementIsLoading,
    bookedSessionsOwnerIsLoading,
    sessionDate,
    userIdOfParent,
    bookingId,
    sessionPrice,
    sessionChildren,
    typeOfSession,
    matchedBookingFound,
    numberOfChildrenInBooking,
    userOfAppChoice,
    formattedDate,
  };
};

export default useDbManageCancelBookingVariables;
