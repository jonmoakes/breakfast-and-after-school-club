import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";
import { selectGetUserBookingsError } from "../../../store/user-bookings/user-bookings.selector";
import { selectBookedSessionsSelectors } from "../../../store/booked-sessions/booked-sessions.slice";
import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";
import {
  addFundsRoute,
  bookSessionRoute,
  userBookingsRoute,
  yourCustomerBookingsRoute,
} from "../../../strings/strings";

const useHandleShowError = () => {
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const getUsersBookingsError = useSelector(selectGetUserBookingsError);
  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
  const { requestDateDataError } = useSelector(selectRequestDateDataSelectors);
  const { bookedSessionsError } = useSelector(selectBookedSessionsSelectors);
  const { handlePaymentError } = useSelector(selectHandlePaymentSelectors);

  const location = useLocation();
  const path = location.pathname;

  const showErrorHeading = () => {
    if (getUsersChildrenError) return "failed to fetch users children.";
    if (getUsersBookingsError) return "failed to fetch your bookings.";
    if (sessionTypesAndPricesError) return "failed to fetch session prices.";
    if (requestDateDataError) return "failed to fetch request date data.";
    if (bookedSessionsError) return "failed to fetch your customer bookings.";
    if (handlePaymentError) return "failed to contact payment processor.";
  };

  const errorToDisplay = () => {
    const errors = [
      getUsersChildrenError,
      getUsersBookingsError,
      sessionTypesAndPricesError,
      requestDateDataError,
      bookedSessionsError,
      handlePaymentError,
      getUsersBookingsError,
    ];

    return errors.find((error) => error !== null);
  };

  const showTailInfoToUser = () => {
    switch (path) {
      case bookSessionRoute:
        return "book a session";
      case addFundsRoute:
        return "complete a payment";
      case userBookingsRoute:
      case yourCustomerBookingsRoute:
        return "show your bookings";
      default:
        return "";
    }
  };

  return { showErrorHeading, errorToDisplay, showTailInfoToUser };
};

export default useHandleShowError;
