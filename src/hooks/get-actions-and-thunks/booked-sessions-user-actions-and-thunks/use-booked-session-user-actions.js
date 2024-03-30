import { useDispatch } from "react-redux";

import {
  resetBookSessionUserError,
  resetBookedSessionsUserState,
  setBookedSessionsUserShowAllDates,
} from "../../../store/booked-sessions-user/booked-sessions-user.slice";

const useBookedSessionsUserActions = () => {
  const dispatch = useDispatch();

  const dispatchResetBookedSessionsUserError = () => {
    dispatch(resetBookSessionUserError());
  };

  const dispatchResetBookedSessionsUserState = () => {
    dispatch(resetBookedSessionsUserState());
  };

  const dispatchSetBookedSessionsUserShowAllDates = (boolean) => {
    dispatch(setBookedSessionsUserShowAllDates(boolean));
  };

  return {
    dispatchResetBookedSessionsUserError,
    dispatchResetBookedSessionsUserState,
    dispatchSetBookedSessionsUserShowAllDates,
  };
};

export default useBookedSessionsUserActions;
