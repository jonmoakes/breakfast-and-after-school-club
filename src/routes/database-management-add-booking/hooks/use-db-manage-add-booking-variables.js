import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetSessionPrice from "../../../hooks/use-get-session-price";

import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

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
  const { afternoonShortSessionPrice } = useGetSessionTypesAndPricesSelectors();

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
    afternoonShortSessionPrice,
  };
};

export default useDbManageAddBookingVariables;
