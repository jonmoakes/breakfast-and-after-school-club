import { useDispatch } from "react-redux";

import {
  setNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementState,
  resetDatabaseManagementResult,
  resetNewMorningBookingClosingTime,
} from "../../../store/database-management/database-management.slice";

const useDatabaseManagementActions = () => {
  const dispatch = useDispatch();

  const dispatchSetNewMorningBookingClosingTime = (payload) => {
    dispatch(setNewMorningBookingClosingTime(payload));
  };

  const dispatchResetNewMorningBookingClosingTime = () => {
    dispatch(resetNewMorningBookingClosingTime());
  };

  const dispatchResetDatabaseManagementResult = () => {
    dispatch(resetDatabaseManagementResult());
  };

  const dispatchResetDatabaseManagementError = () => {
    dispatch(resetDatabaseManagementError());
  };

  const dispatchResetDatabaseManagementState = () => {
    dispatch(resetDatabaseManagementState());
  };

  return {
    dispatchSetNewMorningBookingClosingTime,
    dispatchResetNewMorningBookingClosingTime,
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementState,
  };
};

export default useDatabaseManagementActions;
