import useBookedSessionsOwnerFunctions from "./booked-sessions-owner-hooks/use-booked-sessions-owner-functions";
import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const ToggleBookingsShownButton = ({ data }) => {
  const {
    noDataFound,
    allBookingsAreBeingShown,
    showTodaysBookings,
    showAllBookings,
  } = useBookedSessionsOwnerFunctions();

  return (
    <FilterEntriesButtonDiv>
      {noDataFound(data) ? null : allBookingsAreBeingShown(data) ? (
        <GreyButton onClick={showTodaysBookings}>
          show todays bookings
        </GreyButton>
      ) : (
        <GreyButton onClick={showAllBookings}>show all bookings</GreyButton>
      )}
    </FilterEntriesButtonDiv>
  );
};

export default ToggleBookingsShownButton;
