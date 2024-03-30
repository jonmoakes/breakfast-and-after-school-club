import { useDispatch } from "react-redux";

import {
  resetBookedSessionsOwnerError,
  resetBookedSessionsOwnerState,
  setBookedSessionsOwner,
  setBookedSessionsOwnerShowAllDates,
} from "../../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useBookedSessionsOwnerActions = () => {
  const dispatch = useDispatch();

  const dispatchSetBookedSessionsOwner = (updatedEntries) => {
    dispatch(setBookedSessionsOwner(updatedEntries));
  };

  const dispatchBookedSessionsOwnerSetShowAllDates = (boolean) => {
    dispatch(setBookedSessionsOwnerShowAllDates(boolean));
  };

  const dispatchResetBookedSessionsOwnerError = () => {
    dispatch(resetBookedSessionsOwnerError());
  };

  const dispatchResetBookedSessionsOwnerState = () => {
    dispatch(resetBookedSessionsOwnerState());
  };

  return {
    dispatchSetBookedSessionsOwner,
    dispatchBookedSessionsOwnerSetShowAllDates,
    dispatchResetBookedSessionsOwnerError,
    dispatchResetBookedSessionsOwnerState,
  };
};

export default useBookedSessionsOwnerActions;
