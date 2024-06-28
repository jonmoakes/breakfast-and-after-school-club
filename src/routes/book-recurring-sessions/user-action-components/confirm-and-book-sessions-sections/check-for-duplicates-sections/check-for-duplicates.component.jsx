import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";

import CheckBookingsButton from "./check-bookings-button.component";
import NoDuplicatesFoundSummaryAndBookButton from "./no-duplicates-found-and-book-button.component";

const CheckForDuplicates = () => {
  const { showConfirmButton } = useBookRecurringSessionsVariables();

  return (
    <>
      {!showConfirmButton ? (
        <CheckBookingsButton />
      ) : (
        <NoDuplicatesFoundSummaryAndBookButton />
      )}
    </>
  );
};

export default CheckForDuplicates;
