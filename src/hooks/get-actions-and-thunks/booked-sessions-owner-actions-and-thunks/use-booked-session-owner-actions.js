import { useDispatch } from "react-redux";

import {
  resetBookedSessionsOwnerError,
  resetBookedSessionsOwnerState,
  setBookedSessionsOwner,
  setBookedSessionsOwnerShowAllDates,
  resetUpdateRegistrationError,
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

  const dispatchResetUpdateRegistrationError = () => {
    dispatch(resetUpdateRegistrationError());
  };

  return {
    dispatchSetBookedSessionsOwner,
    dispatchBookedSessionsOwnerSetShowAllDates,
    dispatchResetBookedSessionsOwnerError,
    dispatchResetBookedSessionsOwnerState,
    dispatchResetUpdateRegistrationError,
  };
};

export default useBookedSessionsOwnerActions;
