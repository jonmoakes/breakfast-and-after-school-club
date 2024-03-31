import useBookSessionActions from "../../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";
import useDatesLogic from "../logic/use-dates-logic";
import useGetChildrenLogic from "./use-get-children-logic";

const useSessionLogic = () => {
  const {
    updateUserDocBalance,
    updateSessionDoc,
    resetSessionDoc,
    sessionType,
    sessionPrice,
    addSessionBookingInfo,
  } = useGetBookSessionSelectors();
  const { dispatchResetSessionTypeAndPrice } = useBookSessionActions();
  const { date, morningSessionSpaces, afternoonSessionSpaces } =
    useDatesLogic();
  const { childrenSelectedForBooking } = useGetChildrenLogic();

  const updateBalanceResult = updateUserDocBalance.result;
  const updateBalanceError = updateUserDocBalance.error;
  const updateSessionResult = updateSessionDoc.result;
  const updateSessionError = updateSessionDoc.error;
  const resetSessionResult = resetSessionDoc.result;
  const resetSessionError = resetSessionDoc.error;
  const addSessionBookingInfoResult = addSessionBookingInfo.result;
  const addSessionBookingInfoError = addSessionBookingInfo.error;

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;

  const onlyMorningSessionsAvailable = () => {
    return date && morningSessionSpaces && !afternoonSessionSpaces
      ? true
      : false;
  };

  const onlyAfternoonSessionsAvailable = () => {
    return date && !morningSessionSpaces && afternoonSessionSpaces
      ? true
      : false;
  };

  const allSessionsAvailable = () => {
    return date && morningSessionSpaces && afternoonSessionSpaces
      ? true
      : false;
  };

  const notEnoughMorningSpacesForMultipleChildren = () => {
    return sessionType === "morning" &&
      childrenSelectedForBooking.length > 1 &&
      morningSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughAfternoonSpacesForMultipleChildren = () => {
    return (sessionType === "afternoonShort" ||
      sessionType === "afternoonLong") &&
      childrenSelectedForBooking.length > 1 &&
      afternoonSessionSpaces < childrenSelectedForBooking.length
      ? true
      : false;
  };

  const notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession =
    () => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        morningSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  const notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession =
    () => {
      return (sessionType === "morningAndAfternoonShort" ||
        sessionType === "morningAndAfternoonLong") &&
        childrenSelectedForBooking.length > 1 &&
        afternoonSessionSpaces < childrenSelectedForBooking.length
        ? true
        : false;
    };

  const cancelResult = () => {
    dispatchResetSessionTypeAndPrice();
  };

  return {
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
    numberOfSpacesToAdd,
    updateBalanceResult,
    updateBalanceError,
    updateSessionError,
    sessionType,
    sessionPrice,
    updateSessionResult,
    resetSessionResult,
    resetSessionError,
    addSessionBookingInfoResult,
    addSessionBookingInfoError,
    cancelResult,
  };
};

export default useSessionLogic;
