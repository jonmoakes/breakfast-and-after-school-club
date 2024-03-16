import { useSelector } from "react-redux";
import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { selectBookedSessionsUserSelectors } from "../../../../store/booked-sessions-user/booked-sessions-user.slice";
import { selectRequestDateDataSelectors } from "../../../../store/request-date-data/request-date-data.slice";
import { selectSessionTypesAndPricesSelectors } from "../../../../store/session-types-and-prices/session-types-and-prices.slice";

const useErrorFetchingData = () => {
  const { requestDateDataError } = useSelector(selectRequestDateDataSelectors);

  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );

  const { bookedSessionsUserError } = useSelector(
    selectBookedSessionsUserSelectors
  );
  const { sessionTypesAndPricesError } = useSelector(
    selectSessionTypesAndPricesSelectors
  );

  const errorFetchingData = () => {
    return getUsersChildrenError ||
      bookedSessionsUserError ||
      sessionTypesAndPricesError ||
      (requestDateDataError && requestDateDataError !== "is not available")
      ? true
      : false;
  };

  return { errorFetchingData };
};

export default useErrorFetchingData;
