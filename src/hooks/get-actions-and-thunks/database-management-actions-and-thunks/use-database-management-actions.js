import { useDispatch } from "react-redux";

import {
  setNewMorningBookingClosingTime,
  resetDatabaseManagementError,
  resetDatabaseManagementState,
  resetDatabaseManagementResult,
  resetNewMorningBookingClosingTime,
  setNewAfternoonBookingClosingTime,
  resetNewAfternoonBookingClosingTime,
  resetNewSessionTimesDetails,
  setNewMorningSessionTime,
  setNewAfternoonShortSessionTime,
  setNewAfternoonLongSessionTime,
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

  const dispatchSetNewMorningSessionTime = (payload) => {
    dispatch(setNewMorningSessionTime(payload));
  };

  const dispatchSetNewAfternoonShortSessionTime = (payload) => {
    dispatch(setNewAfternoonShortSessionTime(payload));
  };

  const dispatchSetNewAfternoonLongSessionTime = (payload) => {
    dispatch(setNewAfternoonLongSessionTime(payload));
  };

  const dispatchResetNewSessionTimesDetails = () => {
    dispatch(resetNewSessionTimesDetails());
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
    dispatchSetNewMorningSessionTime,
    dispatchSetNewAfternoonShortSessionTime,
    dispatchSetNewAfternoonLongSessionTime,
    dispatchResetNewSessionTimesDetails,
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementState,
  };
};

export default useDatabaseManagementActions;
