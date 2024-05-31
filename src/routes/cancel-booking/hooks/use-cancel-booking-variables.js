import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";

import { getSessionTypeString } from "../../../functions/get-session-type-string";
import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";

const useCancelBookingVariables = () => {
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { walletBalance } = useGetCurrentUserSelectors();

  // childrenName is a string with the names of all children in the booking. If more than one name, they are separated by a comma.
  const { date, sessionType, childrensName } = userBookingToDelete || {};

  const formattedDate = date ? format(new Date(date), "dd MMMM yyyy") : date;
  const formattedSessionType = getSessionTypeString(sessionType);

  // gets the amount of commas in the names string as when booking a session, if more than one child is selected, they are separated by a comma in the string. therefore,  if there is 1 comma, there must be 2 names etc.
  const numberOfChildrenInBooking = getNumberOfChildrenInBooking(childrensName);

  const walletBalanceToFixed = (walletBalance / 100).toFixed(2);

  return {
    childrensName,
    sessionType,
    formattedDate,
    formattedSessionType,
    numberOfChildrenInBooking,
    walletBalanceToFixed,
    userBookingToDelete,
  };
};

export default useCancelBookingVariables;
