import { useNavigate, useLocation } from "react-router-dom";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useBookedSessionsOwnerActions from "../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  isInAfteroonHours,
  isInMorningHours,
} from "../../../components/tables/sign-in-out-registration/sign-in-out-shared-logic";

import {
  areYouSureMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import { loseRegistrationChanges } from "../../../strings/infos/infos-strings";
import {
  bookedSessionsOwnerRoute,
  chosenEntryChildDetailsRoute,
} from "../../../strings/routes/routes-strings";

const useBookedSessionsOwnerFunctions = (chosenEntry) => {
  const { bookedSessionsOwner, bookedSessionsOwnerShowAllDates } =
    useGetBookedSessionsOwnerSelectors();
  const {
    dispatchBookedSessionsOwnerSetShowAllDates,
    dispatchSetBookedSessionsOwner,
  } = useBookedSessionsOwnerActions();
  const { confirmSwal } = useConfirmSwal();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

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
    const confirmResult = () => {
      navigate(chosenEntryChildDetailsRoute, {
        state: { ...{ chosenEntry } },
      });
    };

    if (
      path === bookedSessionsOwnerRoute &&
      !bookedSessionsOwnerShowAllDates &&
      (isInMorningHours || isInAfteroonHours)
    ) {
      confirmSwal(
        areYouSureMessage,
        loseRegistrationChanges,
        imSureMessage,
        () => confirmResult()
      );
    } else {
      confirmResult();
    }
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
