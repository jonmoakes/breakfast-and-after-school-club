import { useDispatch } from "react-redux";

import {
  resetBookSessionUserError,
  resetBookedSessionsUserState,
} from "../../../store/booked-sessions-user/booked-sessions-user.slice";

const useBookedSessionsUserActions = () => {
  const dispatch = useDispatch();

  const dispatchResetBookedSessionsUserError = () => {
    dispatch(resetBookSessionUserError());
  };

  const dispatchResetBookedSessionsUserState = () => {
    dispatch(resetBookedSessionsUserState());
  };

  return {
    dispatchResetBookedSessionsUserError,
    dispatchResetBookedSessionsUserState,
  };
};

export default useBookedSessionsUserActions;
