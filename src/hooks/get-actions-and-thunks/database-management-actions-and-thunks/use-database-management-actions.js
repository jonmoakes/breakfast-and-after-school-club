import { useDispatch } from "react-redux";

import {
  setNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementState,
  resetDatabaseManagementResult,
  resetNewMorningBookingClosingTime,
  setNewAfternoonBookingClosingTime,
  resetNewAfternoonBookingClosingTime,
} from "../../../store/database-management/database-management.slice";

const useDatabaseManagementActions = () => {
  const dispatch = useDispatch();

  const dispatchSetNewMorningBookingClosingTime = (payload) => {
    dispatch(setNewMorningBookingClosingTime(payload));
  };

  const dispatchResetNewMorningBookingClosingTime = () => {
    dispatch(resetNewMorningBookingClosingTime());
  };

  const dispatchSetNewAfternoonBookingClosingTime = (payload) => {
    dispatch(setNewAfternoonBookingClosingTime(payload));
  };

  const dispatchResetNewAfternoonBookingClosingTime = () => {
    dispatch(resetNewAfternoonBookingClosingTime());
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
    dispatchSetNewAfternoonBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementState,
  };
};

export default useDatabaseManagementActions;
