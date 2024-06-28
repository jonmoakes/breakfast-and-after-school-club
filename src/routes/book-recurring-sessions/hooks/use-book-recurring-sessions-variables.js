import { format } from "date-fns";

import useGetBookRecurringSessionsSelectors from "../../../hooks/get-selectors/use-get-book-recurring-sessions-selectors";
import useGetBookedSessionsUserSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import useGetSendEmailSelectors from "../../../hooks/get-selectors/use-get-send-email-selectors";
import useGetSessionTypesAndPricesSelectors from "../../../hooks/get-selectors/use-get-session-types-and-prices-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetChildrenLogic from "../../book-a-session/book-a-session-hooks/logic/use-get-children-logic";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

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
  const {
    bookRecurringSessionsIsLoading,
    dayChoice,
    sessionChoice,
    bookingsToAdd,
    showConfirmButton,
    showHelp,
  } = useGetBookRecurringSessionsSelectors();
  const { bookedSessionsUserError, bookedSessionsUser } =
    useGetBookedSessionsUserSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const {
    childrenSelectedLength,
    numberOfChildrenInBooking,
    childrenSelectedForBooking,
  } = useGetChildrenLogic();

  // const date = new Date();
  // const monthAsString = format(date, "MMMM");
  // const date = new Date();
  const monthAsString = "july";
  //  format(date, "MMMM");
  const childrensNamesInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    usersChildren
  );

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
    bookedSessionsUserError,
    bookedSessionsUser,
    bookingsToAdd,
    showConfirmButton,
    showHelp,
    sendEmailIsLoading,
    childrensNamesInBooking,
  };
};

export default useBookRecurringSessionsVariables;
