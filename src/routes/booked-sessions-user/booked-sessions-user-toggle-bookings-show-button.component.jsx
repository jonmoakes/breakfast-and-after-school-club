import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const BookedSessionsUserToggleBookingsShownButton = ({ chosenEntry }) => {
  const {
    noBookingsHaveBeenMadeYet,
    noEntryHasBeenSelected,
    allBookingsAreBeingShown,
    showCurrentAndFutureBookings,
    showAllBookings,
    noUpcomingBookingsFound,
  } = useBookedSessionsUserFunctions(chosenEntry);

  return (
    <>
      {noEntryHasBeenSelected() ? (
        <FilterEntriesButtonDiv>
          {noBookingsHaveBeenMadeYet() ||
          noUpcomingBookingsFound() ? null : allBookingsAreBeingShown() ? (
            <GreyButton
              className="small-text"
              onClick={showCurrentAndFutureBookings}
            >
              show upcoming bookings
            </GreyButton>
          ) : (
            <GreyButton className="small-text" onClick={showAllBookings}>
              show all bookings
            </GreyButton>
          )}
        </FilterEntriesButtonDiv>
      ) : null}
    </>
  );
};

export default BookedSessionsUserToggleBookingsShownButton;
