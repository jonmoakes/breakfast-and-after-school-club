import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetChildrenLogic from "../../book-a-session/book-a-session-hooks/logic/use-get-children-logic";

const useBookRecurringSessionsVariables = () => {
  const {
    sessionTypesAndPricesIsLoading,
    sessionTypesAndPrices,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
  } = useGetSessionTypesAndPricesSelectors();
  const { dateData, requestDateDataIsLoading, requestDateDataError } =
    useGetRequestDateDataSelectors();
  const { getUsersChildrenIsLoading, getUsersChildrenError, usersChildren } =
    useGetUsersChildrenSelectors();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { bookRecurringSessionsIsLoading, dayChoice, sessionChoice } =
    useGetBookRecurringSessionsSelectors();
  const { childrenSelectedLength, numberOfChildrenInBooking } =
    useGetChildrenLogic();

  // const date = new Date();
  const monthAsString = "july";
  //  format(date, "MMMM");

  return {
    sessionTypesAndPrices,
    morningSessionPrice,
    afternoonShortSessionPrice,
    afternoonLongSessionPrice,
    morningAndAfternoonShortSessionPrice,
    morningAndAfternoonLongSessionPrice,
    dateData,
    requestDateDataIsLoading,
    requestDateDataError,
    getUsersChildrenIsLoading,
    getUsersChildrenError,
    sessionTypesAndPricesIsLoading,
    databaseManagementIsLoading,
    bookRecurringSessionsIsLoading,
    dayChoice,
    sessionChoice,
    usersChildren,
    childrenSelectedLength,
    numberOfChildrenInBooking,
    monthAsString,
  };
};

export default useBookRecurringSessionsVariables;
