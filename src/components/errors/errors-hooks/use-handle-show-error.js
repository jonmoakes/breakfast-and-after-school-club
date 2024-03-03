import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../store/session-types-and-prices/session-types-and-prices.slice";
import { selectBookedSessionsUserSelectors } from "../../../store/booked-sessions-user/booked-sessions-user.slice";
import { selectBookedSessionsOwnerSelectors } from "../../../store/booked-sessions-owner/booked-sessions-owner.slice";
import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";
import {
  addFundsRoute,
  bookSessionRoute,
  cancelBookingRoute,
  userBookingsRoute,
  yourCustomerBookingsRoute,
} from "../../../strings/strings";

const useHandleShowError = () => {
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const { bookedSessionsUserError } = useSelector(
    selectBookedSessionsUserSelectors
  );
  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );
  const { requestDateDataError } = useSelector(selectRequestDateDataSelectors);
  const { bookedSessionsOwnerError } = useSelector(
    selectBookedSessionsOwnerSelectors
  );
  const { handlePaymentError } = useSelector(selectHandlePaymentSelectors);

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
      case cancelBookingRoute:
        return "cancel your booking";
      default:
        return "";
    }
  };

  return { showErrorHeading, errorToDisplay, showTailInfoToUser };
};

export default useHandleShowError;
