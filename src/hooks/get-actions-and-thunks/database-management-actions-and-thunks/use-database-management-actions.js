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
  setNewMorningSessionPrice,
  setNewAfternoonShortSessionPrice,
  setNewAfternoonLongSessionPrice,
  setNewMorningAndAfternoonShortSessionPrice,
  setNewMorningAndAfternoonLongSessionPrice,
  resetNewSessionPricesDetails,
  setReceivedErrorFromEmail,
  resetReceivedErrorFromEmail,
  setDataToUpdateDocument,
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

  const dispatchSetNewMorningSessionPrice = (payload) => {
    dispatch(setNewMorningSessionPrice(payload));
  };

  const dispatchSetNewAfternoonShortSessionPrice = (payload) => {
    dispatch(setNewAfternoonShortSessionPrice(payload));
  };

  const dispatchSetNewAfternoonLongSessionPrice = (payload) => {
    dispatch(setNewAfternoonLongSessionPrice(payload));
  };

  const dispatchSetNewMorningAndAfternoonShortSessionPrice = (payload) => {
    dispatch(setNewMorningAndAfternoonShortSessionPrice(payload));
  };

  const dispatchSetNewMorningAndAfternoonLongSessionPrice = (payload) => {
    dispatch(setNewMorningAndAfternoonLongSessionPrice(payload));
  };

  const dispatchResetNewSessionPricesDetails = () => {
    dispatch(resetNewSessionPricesDetails());
  };

  const dispatchSetReceivedErrorFromEmail = (payload) => {
    dispatch(setReceivedErrorFromEmail(payload));
  };

  const dispatchResetReceivedErrorFromEmail = () => {
    dispatch(resetReceivedErrorFromEmail());
  };

  const dispatchSetDataToUpdateDocument = (payload) => {
    dispatch(setDataToUpdateDocument(payload));
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
    dispatchSetNewMorningSessionPrice,
    dispatchSetNewAfternoonShortSessionPrice,
    dispatchSetNewAfternoonLongSessionPrice,
    dispatchSetNewMorningAndAfternoonShortSessionPrice,
    dispatchSetNewMorningAndAfternoonLongSessionPrice,
    dispatchResetNewSessionPricesDetails,
    dispatchSetReceivedErrorFromEmail,
    dispatchResetReceivedErrorFromEmail,
    dispatchSetDataToUpdateDocument,
  };
};

export default useDatabaseManagementActions;
