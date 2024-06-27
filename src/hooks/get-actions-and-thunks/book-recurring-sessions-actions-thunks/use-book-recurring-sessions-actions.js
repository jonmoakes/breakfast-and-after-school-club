import { useDispatch } from "react-redux";

import {
  setDayChoice,
  setSessionChoice,
  setBookingsToAdd,
  setShowConfirmButton,
  setShowHelp,
  resetUpdateSessionSpacesResult,
  resetUpdateSessionSpacesError,
  resetAddRecurringBookingsResult,
  resetAddRecurringBookingsError,
  resetBookRecurringSessionsState,
} from "../../../store/book-recurring-sessions/book-recurring-sessions.slice";

const useBookRecurringSessionsActions = () => {
  const dispatch = useDispatch();

  const dispatchSetDayChoice = (payload) => {
    dispatch(setDayChoice(payload));
  };

  const dispatchSetSessionChoice = (payload) => {
    dispatch(setSessionChoice(payload));
  };

  const dispatchSetBookingsToAdd = (payload) => {
    dispatch(setBookingsToAdd(payload));
  };

  const dispatchSetShowConfirmButton = (payload) => {
    dispatch(setShowConfirmButton(payload));
  };

  const dispatchSetShowHelp = (payload) => {
    dispatch(setShowHelp(payload));
  };

  const dispatchResetUpdateSessionSpacesResult = () => {
    dispatch(resetUpdateSessionSpacesResult());
  };

  const dispatchResetUpdateSessionSpacesError = () => {
    dispatch(resetUpdateSessionSpacesError());
  };

  const dispatchAddRecurringBookingsResult = () => {
    dispatch(resetAddRecurringBookingsResult());
  };

  const dispatchAddRecurringBookingsError = () => {
    dispatch(resetAddRecurringBookingsError());
  };

  const dispatchResetBookRecurringSessionsState = () => {
    dispatch(resetBookRecurringSessionsState());
  };

  return {
    dispatchSetDayChoice,
    dispatchSetSessionChoice,
    dispatchSetBookingsToAdd,
    dispatchSetShowConfirmButton,
    dispatchSetShowHelp,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchAddRecurringBookingsResult,
    dispatchAddRecurringBookingsError,
    dispatchResetBookRecurringSessionsState,
  };
};

export default useBookRecurringSessionsActions;
