import { useDispatch } from "react-redux";

import {
  setNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementState,
} from "../../../store/database-management/database-management.slice";

const useDatabaseManagementActions = () => {
  const dispatch = useDispatch();

  const dispatchSetNewMorningBookingClosingTime = (payload) => {
    dispatch(setNewMorningBookingClosingTime(payload));
  };

  const dispatchResetDatabaseManagementError = () => {
    dispatch(resetDatabaseManagementError());
  };

  const dispatchResetDatabaseManagementState = () => {
    dispatch(resetDatabaseManagementState());
  };

  return {
    dispatchSetNewMorningBookingClosingTime,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementState,
  };
};

export default useDatabaseManagementActions;
