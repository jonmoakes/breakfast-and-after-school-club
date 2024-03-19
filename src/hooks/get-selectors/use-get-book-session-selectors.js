import { useSelector } from "react-redux";

import { selectBookSessionSelectors } from "../../store/book-session/book-session.slice";

const useGetBookSessionSelectors = () => {
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
    updateBalanceError,
    updateSessionError,
  };
};

export default useGetBookSessionSelectors;
