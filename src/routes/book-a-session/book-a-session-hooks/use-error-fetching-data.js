import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";

const useErrorFetchingData = () => {
  const { requestDateDataError } = useGetRequestDateDataSelectors();
  const { getUsersChildrenError } = useGetUsersChildrenSelectors();
  const { bookedSessionsUserError } = useGetBookedSessionsUserSelectors();
  const { sessionTypesAndPricesError } = useGetSessionTypesAndPricesSelectors();

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
