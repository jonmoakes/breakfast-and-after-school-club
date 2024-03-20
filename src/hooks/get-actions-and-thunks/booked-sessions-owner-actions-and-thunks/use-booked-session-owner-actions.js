import { useDispatch } from "react-redux";

import {
  resetBookedSessionsOwnerError,
  resetBookedSessionsOwnerState,
  setBookedSessionsOwner,
  setShowAllDates,
} from "../../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useBookedSessionsOwnerActions = () => {
  const dispatch = useDispatch();

  const dispatchSetBookedSessionsOwner = (updatedEntries) => {
    dispatch(setBookedSessionsOwner(updatedEntries));
  };

  const dispatchSetShowAllDates = (boolean) => {
    dispatch(setShowAllDates(boolean));
  };

  const dispatchResetBookedSessionsOwnerError = () => {
    dispatch(resetBookedSessionsOwnerError());
  };

  const dispatchResetBookedSessionsOwnerState = () => {
    dispatch(resetBookedSessionsOwnerState());
  };

  return {
    dispatchSetBookedSessionsOwner,
    dispatchSetShowAllDates,
    dispatchResetBookedSessionsOwnerError,
    dispatchResetBookedSessionsOwnerState,
  };
};

export default useBookedSessionsOwnerActions;
