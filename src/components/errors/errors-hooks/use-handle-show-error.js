import { useSelector } from "react-redux";

import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectGetPricesError } from "../../../store/session-types-and-prices/session-types-and-prices.selector";
import { selectGetUserBookingsError } from "../../../store/user-bookings/user-bookings.selector";
import { selectBookedSessionsSelectors } from "../../../store/booked-sessions/booked-sessions.slice";
import { selectHandlePaymentSelectors } from "../../../store/handle-payment/handle-payment.slice";

const useHandleShowError = () => {
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const getUsersBookingsError = useSelector(selectGetUserBookingsError);
  const getSessionTypesAndPricesError = useSelector(selectGetPricesError);
  const { requestDateDataError } = useSelector(selectRequestDateDataSelectors);
  const { bookedSessionsError } = useSelector(selectBookedSessionsSelectors);
  const { handlePaymentError } = useSelector(selectHandlePaymentSelectors);

  const showErrorHeading = () => {
    if (getUsersChildrenError) return "failed to fetch users children.";
    if (getUsersBookingsError) return "failed to fetch users bookings.";
    if (getSessionTypesAndPricesError) return "failed to fetch session prices.";
    if (requestDateDataError) return "failed to fetch request date data.";
    if (bookedSessionsError) return "failed to fetch your bookings.";
    if (handlePaymentError) return "failed to contact payment processor.";
  };

  const errorToDisplay = () => {
    const errors = [
      getUsersChildrenError,
      getUsersBookingsError,
      getSessionTypesAndPricesError,
      requestDateDataError,
      bookedSessionsError,
      handlePaymentError,
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
