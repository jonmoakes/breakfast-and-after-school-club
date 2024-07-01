import { useLocation } from "react-router-dom";

import useGetHandlePaymentSelectors from "../../../hooks/get-selectors/use-get-handle-payment-selectors";
import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetAllChildrenSelectors from "../../../hooks/get-selectors/use-get-all-children-selectors";
import useGetAllUsersSelectors from "../../../hooks/get-selectors/use-get-all-users-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetIncomeDataSelectors from "../../../hooks/get-selectors/use-get-income-data-selectors";

import {
  addFundsRoute,
  bookSessionRoute,
  cancelBookingRoute,
  bookedSessionsUserRoute,
  bookedSessionsOwnerRoute,
  allChildrenRoute,
  allUsersRoute,
  childInfoRoute,
  databaseManagementViewBookingClosingTimesRoute,
  databaseManagementViewSessionPricesRoute,
  databaseManagementViewSessionTimesRoute,
  databaseManagementCancelBookingRoute,
  bookRecurringSessionsRoute,
  incomeRoute,
} from "../../../strings/routes/routes-strings";

const useHandleShowError = () => {
  const { bookedSessionsOwnerError } = useGetBookedSessionsOwnerSelectors();
  const { bookedSessionsUserError } = useGetBookedSessionsUserSelectors();
  const { getAllChildrenError } = useGetAllChildrenSelectors();
  const { getAllUsersError } = useGetAllUsersSelectors();
  const { getUsersChildrenError } = useGetUsersChildrenSelectors();
  const { handlePaymentError } = useGetHandlePaymentSelectors();
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();
  const { requestDateDataError } = useGetRequestDateDataSelectors();
  const { incomeDataError } = useGetIncomeDataSelectors();

  const location = useLocation();
  const path = location.pathname;

  const showErrorHeading = () => {
    if (getUsersChildrenError) return "failed to fetch users children.";
    if (bookedSessionsUserError) return "failed to fetch your bookings.";
    if (sessionTypesAndPricesError) return "failed to fetch session prices.";
    if (requestDateDataError) return "failed to fetch request date data.";
    if (bookedSessionsOwnerError)
      return "failed to fetch your customer bookings.";
    if (handlePaymentError) return "failed to contact payment processor.";
    if (getAllChildrenError) return "failed to fetch all children.";
    if (getAllUsersError) return "failed to fetch users.";
    if (incomeDataError) return "failed to fetch income data.";
  };

  const errorToDisplay = () => {
    const errors = [
      getUsersChildrenError,
      bookedSessionsUserError,
      sessionTypesAndPricesError,
      requestDateDataError,
      bookedSessionsOwnerError,
      handlePaymentError,
      bookedSessionsUserError,
      getAllChildrenError,
      getAllUsersError,
      incomeDataError,
    ];

    return errors.find((error) => error !== null);
  };

  const showTailInfoToUser = () => {
    switch (path) {
      case bookSessionRoute:
      case bookRecurringSessionsRoute:
        return "book a session";
      case addFundsRoute:
        return "complete a payment";
      case bookedSessionsUserRoute:
      case bookedSessionsOwnerRoute:
        return "show your bookings";
      case cancelBookingRoute:
        return "cancel your booking";
      case allChildrenRoute:
        return "display the list of children";
      case allUsersRoute:
        return "display the list of users";
      case childInfoRoute:
        return "display the list of your children";
      case databaseManagementViewBookingClosingTimesRoute:
        return "display the booking closing times from the database";
      case databaseManagementViewSessionTimesRoute:
        return "display the session times from the database";
      case databaseManagementViewSessionPricesRoute:
        return "display the session prices from the database";
      case databaseManagementCancelBookingRoute:
        return "cancel a booking";
      case incomeRoute:
        return "display the list of your income";
      default:
        return "display the requested data";
    }
  };

  return { showErrorHeading, errorToDisplay, showTailInfoToUser };
};

export default useHandleShowError;
