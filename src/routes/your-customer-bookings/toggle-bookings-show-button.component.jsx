import { useDispatch, useSelector } from "react-redux";

import {
  selectBookedSessionsOwnerSelectors,
  setShowAllDates,
} from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

import { FilterEntriesButtonDiv } from "../../styles/div/div.styles";
import { GreyButton } from "../../styles/buttons/buttons.styles";

const ToggleBookingsShownButton = ({ sortedOwnerBookings, data }) => {
  const { showAllDates } = useSelector(selectBookedSessionsOwnerSelectors);

  const dispatch = useDispatch();

  const showingTodaysDateBookings = () => {
    return !sortedOwnerBookings.length && data.length && !showAllDates
      ? true
      : false;
  };

  const showingAllBookings = () => {
    return !sortedOwnerBookings.length && data.length && showAllDates
      ? true
      : false;
  };

  const showNothing = () => {
    return !sortedOwnerBookings.length && !data.length && !showAllDates
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
