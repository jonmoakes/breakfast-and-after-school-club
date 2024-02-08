import { useDispatch, useSelector } from "react-redux";

import {
  selectBookedSessionsSelectors,
  setShowAllDates,
} from "../../store/booked-sessions/booked-sessions.slice";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const ToggleBookingsShownButton = ({ sortedBookings, data }) => {
  const { showAllDates } = useSelector(selectBookedSessionsSelectors);

  const dispatch = useDispatch();

  const showingTodaysDateBookings = () => {
    return !sortedBookings.length && data.length && !showAllDates
      ? true
      : false;
  };

  const showingAllBookings = () => {
    return !sortedBookings.length && data.length && showAllDates ? true : false;
  };

  const showNothing = () => {
    return !sortedBookings.length && !data.length && !showAllDates
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
