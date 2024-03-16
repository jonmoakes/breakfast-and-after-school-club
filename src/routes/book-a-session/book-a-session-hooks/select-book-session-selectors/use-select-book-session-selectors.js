import { useSelector } from "react-redux";

import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";

const useSelectBookSessionSelectors = () => {
  const {
    sessionType,
    sessionPrice,
    bookSessionIsLoading,
    updateSessionDoc,
    updateUserDocBalance,
    resetSessionDoc,
    addSessionBookingInfo,
    childrenSelectedForBooking,
  } = useSelector(selectBookSessionSelectors);

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;

  const childrenSelectedLength = childrenSelectedForBooking.length;
  const updateBalanceError = updateUserDocBalance.error;
  const updateSessionError = updateSessionDoc.error;

  return {
    sessionType,
    sessionPrice,
    bookSessionIsLoading,
    updateSessionDoc,
    updateUserDocBalance,
    resetSessionDoc,
    addSessionBookingInfo,
    childrenSelectedForBooking,
    numberOfSpacesToAdd,
    childrenSelectedLength,
    updateBalanceError,
    updateSessionError,
  };
};

export default useSelectBookSessionSelectors;
