import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const BookedSessionsUserToggleBookingsShownButton = ({ chosenEntry, data }) => {
  const {
    noEntryHasBeenSelected,
    noDataFound,
    allBookingsAreBeingShown,
    showCurrentAndFutureBookings,
    showAllBookings,
  } = useBookedSessionsUserFunctions(chosenEntry);

  return (
    <>
      {noEntryHasBeenSelected() ? (
        <FilterEntriesButtonDiv>
          {noDataFound(data) ? null : allBookingsAreBeingShown(data) ? (
            <GreyButton
              className="small-text"
              onClick={showCurrentAndFutureBookings}
            >
              show bookings from today
            </GreyButton>
          ) : (
            <GreyButton onClick={showAllBookings}>show all bookings</GreyButton>
          )}
        </FilterEntriesButtonDiv>
      ) : null}
    </>
  );
};

export default BookedSessionsUserToggleBookingsShownButton;
