import useBookRecurringSessionsVariables from "../../../hooks/use-book-recurring-sessions-variables";

import CheckBookingsButton from "./check-bookings-button.component";
import NoDuplicatesFoundSummaryAndBookButton from "./no-duplicates-found-and-book-button.component";

import { ParentDiv } from "../../../../../styles/div/div.styles";

const CheckForDuplicates = () => {
  const { showConfirmButton } = useBookRecurringSessionsVariables();

  return (
    <ParentDiv className="bounce">
      {!showConfirmButton ? (
        <CheckBookingsButton />
      ) : (
        <NoDuplicatesFoundSummaryAndBookButton />
      )}
    </ParentDiv>
  );
};

export default CheckForDuplicates;
