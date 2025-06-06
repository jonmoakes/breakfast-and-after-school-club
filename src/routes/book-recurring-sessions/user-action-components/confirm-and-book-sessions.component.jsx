import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";

import BookingsWithDuplicatesRemovedInfo from "./confirm-and-book-sessions-sections/check-for-duplicates-sections/bookings-with-duplicates-removed-info.component";
import CheckForDuplicates from "./confirm-and-book-sessions-sections/check-for-duplicates-sections/check-for-duplicates.component";

const ConfirmAndBookSessions = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { totalCost, noMorningSessions, noAfternoonSessions } =
    useRecurringSessionsFunctions();
  const { showHelp } = useBookRecurringSessionsVariables();

  return (
    <>
      {noMorningSessions() || noAfternoonSessions() ? null : showHelp &&
        walletBalance >= totalCost() ? (
        <BookingsWithDuplicatesRemovedInfo />
      ) : walletBalance >= totalCost() ? (
        <CheckForDuplicates />
      ) : null}
    </>
  );
};

export default ConfirmAndBookSessions;
