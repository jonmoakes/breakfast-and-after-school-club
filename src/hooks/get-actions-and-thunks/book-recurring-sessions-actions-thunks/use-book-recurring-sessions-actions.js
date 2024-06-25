import { useDispatch } from "react-redux";

import {
  setDayChoice,
  setSessionChoice,
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
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchAddRecurringBookingsResult,
    dispatchAddRecurringBookingsError,
    dispatchResetBookRecurringSessionsState,
  };
};

export default useBookRecurringSessionsActions;
