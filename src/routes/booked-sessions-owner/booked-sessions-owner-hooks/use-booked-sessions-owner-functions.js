import { useNavigate } from "react-router-dom";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useBookedSessionsOwnerActions from "../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";

import { chosenEntryChildDetailsRoute } from "../../../strings/routes/routes-strings";

const useBookedSessionsOwnerFunctions = (chosenEntry) => {
  const { bookedSessionsOwner, bookedSessionsOwnerShowAllDates } =
    useGetBookedSessionsOwnerSelectors();
  const {
    dispatchBookedSessionsOwnerSetShowAllDates,
    dispatchSetBookedSessionsOwner,
  } = useBookedSessionsOwnerActions();

  const navigate = useNavigate();

  // no bookings at all in database
  const noSessionsBookedYet = () => {
    return !bookedSessionsOwner.length ? true : false;
  };

  const noDataFound = (data) => {
    return !data.length ? true : false;
  };

  const allBookingsAreBeingShown = (data) => {
    return data.length && bookedSessionsOwnerShowAllDates ? true : false;
  };

  const passChosenEntryAndGoToChosenEntryChildDetailsRoute = () => {
    navigate(chosenEntryChildDetailsRoute, {
      state: { ...{ chosenEntry } },
    });
  };

  const noEntryHasBeenSelected = () => {
    return !chosenEntry.length ? true : false;
  };

  const oneEntrySelected = () => {
    return chosenEntry.length === 1 ? true : false;
  };

  const moreThanOneEntrySelectedAndShowingAllBookings = () => {
    return chosenEntry.length > 1 && bookedSessionsOwnerShowAllDates
      ? true
      : false;
  };

  const moreThanOneEntrySelectedAndShowingTodaysBookings = () => {
    return chosenEntry.length > 1 && !bookedSessionsOwnerShowAllDates
      ? true
      : false;
  };

  const showTodaysBookings = () => {
    dispatchBookedSessionsOwnerSetShowAllDates(false);
  };

  const showAllBookings = () => {
    dispatchBookedSessionsOwnerSetShowAllDates(true);
  };

  return {
    noSessionsBookedYet,
    noDataFound,
    allBookingsAreBeingShown,
    passChosenEntryAndGoToChosenEntryChildDetailsRoute,
    noEntryHasBeenSelected,
    oneEntrySelected,
    moreThanOneEntrySelectedAndShowingAllBookings,
    moreThanOneEntrySelectedAndShowingTodaysBookings,
    showTodaysBookings,
    showAllBookings,
    dispatchSetBookedSessionsOwner,
    chosenEntry,
  };
};

export default useBookedSessionsOwnerFunctions;
