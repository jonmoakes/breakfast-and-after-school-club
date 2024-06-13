import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const BookedSessionsUserToggleBookingsShownButton = ({ chosenEntry }) => {
  const {
    noBookingsHaveBeenMadeYet,
    noEntryHasBeenSelected,

    noUpcomingBookingsFound,
  } = useBookedSessionsUserFunctions(chosenEntry);
  const { confirmNotAppOwnerViewAllBookings } = useConfirmSwal();

  return (
    <>
      {noEntryHasBeenSelected() ? (
        <FilterEntriesButtonDiv>
          {noBookingsHaveBeenMadeYet() || noUpcomingBookingsFound() ? null : (
            <GreyButton
              className="small-text"
              onClick={confirmNotAppOwnerViewAllBookings}
            >
              show all bookings
            </GreyButton>
          )}
        </FilterEntriesButtonDiv>
      ) : null}
    </>
  );
};

export default BookedSessionsUserToggleBookingsShownButton;
