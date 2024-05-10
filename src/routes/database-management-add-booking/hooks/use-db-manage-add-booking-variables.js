import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRefundPrice from "../../../hooks/use-get-refund-price";

import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";

const useDbManageAddBookingVariables = () => {
  const {
    databaseManagementIsLoading,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    errorId,
    userOfAppChoice,
  } = useGetDatabaseManagementSelectors();

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const { refundPrice } = useGetRefundPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  return {
    databaseManagementIsLoading,
    date,
    sessionType,
    childrenInBooking,
    parentName,
    parentPhoneNumber,
    parentsUserId,
    parentEmail,
    errorId,
    userOfAppChoice,
    refundPrice,
  };
};

export default useDbManageAddBookingVariables;
