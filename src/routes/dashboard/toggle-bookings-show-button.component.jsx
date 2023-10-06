import { useDispatch, useSelector } from "react-redux";

import { selectShowAllDates } from "../../store/booked-sessions/booked-sessions.selector";
import { setShowAllDates } from "../../store/booked-sessions/booked-sessions.slice";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const ToggleBookingsShownButton = ({ bookedSessions, data }) => {
  const showAllDates = useSelector(selectShowAllDates);

  const dispatch = useDispatch();

  const showingTodaysDateBookings = () => {
    return !bookedSessions.length && data.length && !showAllDates
      ? true
      : false;
  };

  const showingAllBookings = () => {
    return !bookedSessions.length && data.length && showAllDates ? true : false;
  };

  const showNothing = () => {
    return !bookedSessions.length && !data.length && !showAllDates
      ? true
      : false;
  };

  return (
    <FilterEntriesButtonDiv>
      {showingTodaysDateBookings() ? (
        <GreyButton onClick={() => dispatch(setShowAllDates(true))}>
          show all bookings
        </GreyButton>
      ) : showingAllBookings() ? (
        <GreyButton onClick={() => dispatch(setShowAllDates(false))}>
          show todays bookings
        </GreyButton>
      ) : (
        showNothing() && null
      )}
    </FilterEntriesButtonDiv>
  );
};

export default ToggleBookingsShownButton;
