import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";
import useBookSessionActions from "../../../../hooks/get-actions-and-thunks/book-session-actions-and-thunks/use-book-session-actions";
import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";
import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useDatesLogic from "../logic/use-dates-logic";
import useGetChildrenLogic from "./use-get-children-logic";

const useSessionLogic = () => {
  const { id, name, email, phoneNumber, walletBalance } =
    useGetCurrentUserSelectors();
  const { sessionType, sessionPrice } = useGetBookSessionSelectors();
  const { dispatchResetSessionTypeAndPrice } = useBookSessionActions();
  const { date, morningSessionSpaces, afternoonSessionSpaces } =
    useDatesLogic();
  const {
    childrenSelectedForBooking,
    usersChildren,
    numberOfChildrenInBooking,
  } = useGetChildrenLogic();

  const enoughSpacesAvailableInMorningForMultipleChildrenInBooking = () => {
    return date && morningSessionSpaces >= numberOfChildrenInBooking && true;
  };

  const enoughSpacesAvailableInAfternoonForMultipleChildrenInBooking = () => {
    return date && afternoonSessionSpaces >= numberOfChildrenInBooking && true;
  };

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

  // date and sessionType are empty here because they're passed when calling the function to add the booking.
  // they are then set in the thunk that adds the booking before it fires.
  const bookingData = {
    date: "",
    sessionType: "",
    childrenInBooking: createChildrenToAddToBooking(
      childrenSelectedForBooking,
      usersChildren
    ),
    parentName: name,
    parentPhoneNumber: phoneNumber,
    parentsUserId: id,
    parentEmail: email,
  };

  return {
    enoughSpacesAvailableInMorningForMultipleChildrenInBooking,
    enoughSpacesAvailableInAfternoonForMultipleChildrenInBooking,
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
    sessionType,
    sessionPrice,
    cancelResult,
    bookingData,
    walletBalance,
  };
};

export default useSessionLogic;
