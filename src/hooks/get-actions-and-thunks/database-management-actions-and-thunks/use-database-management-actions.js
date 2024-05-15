import { useDispatch } from "react-redux";

import {
  setNewMorningBookingClosingTime,
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
  setDataToUpdateDocument,
  resetBookingClosingTimeResult,
  resetBookingClosingTimeError,
  resetSessionTimeResult,
  resetSessionTimeError,
  resetSessionPricesResult,
  resetSessionPricesError,
  resetUpdateBalanceResult,
  resetUpdateBalanceError,
  resetAddBookingResult,
  resetAddBookingError,
  resetUpdateSessionSpacesResult,
  resetUpdateSessionSpacesError,
  resetDatabaseManagementState,
  setErrorId,
  setUserHasDeletedAllChildren,
  resetDeleteDocumentResult,
  resetDeleteDocumentError,
  resetCreateUserDocumentResult,
  resetCreateUserDocumentError,
  resetCreateChildDocumentResult,
  resetCreateChildDocumentError,
  resetDataToUpdateDocument,
  setBookingToCancelDetails,
  resetBookingToCancelDetails,
  setUserOfAppChoice,
  resetUserOfAppChoice,
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

  const dispatchResetBookingClosingTimeResult = () => {
    dispatch(resetBookingClosingTimeResult());
  };

  const dispatchResetBookingClosingTimeError = () => {
    dispatch(resetBookingClosingTimeError());
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

  const dispatchResetSessionTimeResult = () => {
    dispatch(resetSessionTimeResult());
  };

  const dispatchResetSessionTimeError = () => {
    dispatch(resetSessionTimeError());
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

  const dispatchResetSessionPricesResult = () => {
    dispatch(resetSessionPricesResult());
  };

  const dispatchResetSessionPricesError = () => {
    dispatch(resetSessionPricesError());
  };

  const dispatchSetDataToUpdateDocument = (payload) => {
    dispatch(setDataToUpdateDocument(payload));
  };

  const dispatchResetDataToUpdateDocument = () => {
    dispatch(resetDataToUpdateDocument());
  };

  const dispatchResetUpdateBalanceResult = () => {
    dispatch(resetUpdateBalanceResult());
  };

  const dispatchResetUpdateBalanceError = () => {
    dispatch(resetUpdateBalanceError());
  };

  const dispatchResetAddBookingResult = () => {
    dispatch(resetAddBookingResult());
  };

  const dispatchResetAddBookingError = () => {
    dispatch(resetAddBookingError());
  };

  const dispatchResetUpdateSessionSpacesResult = () => {
    dispatch(resetUpdateSessionSpacesResult());
  };

  const dispatchResetUpdateSessionSpacesError = () => {
    dispatch(resetUpdateSessionSpacesError());
  };

  const dispatchErrorId = (payload) => {
    dispatch(setErrorId(payload));
  };

  const dispatchSetUserHasDeletedAllChildren = (payload) => {
    dispatch(setUserHasDeletedAllChildren(payload));
  };

  const dispatchResetDeleteDocumentResult = () => {
    dispatch(resetDeleteDocumentResult());
  };

  const dispatchResetDeleteDocumentError = () => {
    dispatch(resetDeleteDocumentError());
  };

  const dispatchResetCreateUserDocumentResult = () => {
    dispatch(resetCreateUserDocumentResult());
  };

  const dispatchResetCreateUserDocumentError = () => {
    dispatch(resetCreateUserDocumentError());
  };

  const dispatchResetCreateChildDocumentResult = () => {
    dispatch(resetCreateChildDocumentResult());
  };

  const dispatchResetCreateChildDocumentError = () => {
    dispatch(resetCreateChildDocumentError());
  };

  const dispatchSetBookingToCancelDetails = (payload) => {
    dispatch(setBookingToCancelDetails(payload));
  };

  const dispatchResetBookingToCancelDetails = () => {
    dispatch(resetBookingToCancelDetails());
  };

  const dispatchSetUserOfAppChoice = (payload) => {
    dispatch(setUserOfAppChoice(payload));
  };
  const dispatchResetUserOfAppChoice = () => {
    dispatch(resetUserOfAppChoice());
  };
  const dispatchResetDatabaseManagementState = () => {
    dispatch(resetDatabaseManagementState());
  };

  return {
    dispatchSetNewMorningBookingClosingTime,
    dispatchResetNewMorningBookingClosingTime,
    dispatchSetNewAfternoonBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
    dispatchResetBookingClosingTimeResult,
    dispatchResetBookingClosingTimeError,

    dispatchSetNewMorningSessionTime,
    dispatchSetNewAfternoonShortSessionTime,
    dispatchSetNewAfternoonLongSessionTime,
    dispatchResetNewSessionTimesDetails,
    dispatchResetSessionTimeResult,
    dispatchResetSessionTimeError,

    dispatchSetNewMorningSessionPrice,
    dispatchSetNewAfternoonShortSessionPrice,
    dispatchSetNewAfternoonLongSessionPrice,
    dispatchSetNewMorningAndAfternoonShortSessionPrice,
    dispatchSetNewMorningAndAfternoonLongSessionPrice,
    dispatchResetNewSessionPricesDetails,
    dispatchResetSessionPricesResult,
    dispatchResetSessionPricesError,

    dispatchSetDataToUpdateDocument,
    dispatchResetDataToUpdateDocument,
    dispatchResetUpdateBalanceResult,
    dispatchResetUpdateBalanceError,
    dispatchResetAddBookingResult,
    dispatchResetAddBookingError,
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
    dispatchErrorId,
    dispatchSetUserHasDeletedAllChildren,
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetCreateUserDocumentResult,
    dispatchResetCreateUserDocumentError,
    dispatchResetCreateChildDocumentResult,
    dispatchResetCreateChildDocumentError,
    dispatchSetBookingToCancelDetails,
    dispatchResetBookingToCancelDetails,
    dispatchSetUserOfAppChoice,
    dispatchResetUserOfAppChoice,
    dispatchResetDatabaseManagementState,
  };
};

export default useDatabaseManagementActions;
