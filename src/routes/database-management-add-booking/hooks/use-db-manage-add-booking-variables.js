import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionPrice from "../../../hooks/use-get-session-price";

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

  const { sessionPrice } = useGetSessionPrice(
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
    sessionPrice,
  };
};

export default useDbManageAddBookingVariables;
