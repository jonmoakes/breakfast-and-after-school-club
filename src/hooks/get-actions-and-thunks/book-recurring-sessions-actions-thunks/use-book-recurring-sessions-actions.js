import { useDispatch } from "react-redux";

import {
  resetUpdateSessionSpacesResult,
  resetUpdateSessionSpacesError,
  resetAddRecurringBookingsResult,
  resetAddRecurringBookingsError,
  resetBookRecurringSessionsState,
} from "../../../store/book-recurring-sessions/book-recurring-sessions.slice";

const useBookRecurringSessionsActions = () => {
  const dispatch = useDispatch();

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
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchAddRecurringBookingsResult,
    dispatchAddRecurringBookingsError,
    dispatchResetBookRecurringSessionsState,
  };
};

export default useBookRecurringSessionsActions;
