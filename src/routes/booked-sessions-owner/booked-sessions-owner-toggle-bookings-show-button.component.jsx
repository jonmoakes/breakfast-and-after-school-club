import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const BookedSessionsOwnerToggleBookingsShownButton = ({
  chosenEntry,
  data,
}) => {
  const {
    noEntryHasBeenSelected,
    noDataFound,
    allBookingsAreBeingShown,
    showTodaysBookings,
    showAllBookings,
  } = useBookedSessionsOwnerFunctions(chosenEntry);

  return (
    <>
      {noEntryHasBeenSelected() ? (
        <FilterEntriesButtonDiv>
          {noDataFound(data) ? null : allBookingsAreBeingShown(data) ? (
            <GreyButton onClick={showTodaysBookings}>
              show todays bookings
            </GreyButton>
          ) : (
            <GreyButton onClick={showAllBookings}>
              show future bookings
            </GreyButton>
          )}
        </FilterEntriesButtonDiv>
      ) : null}
    </>
  );
};

export default BookedSessionsOwnerToggleBookingsShownButton;
