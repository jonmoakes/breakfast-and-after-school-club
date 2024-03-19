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

  return {
    sessionType,
    sessionPrice,
    bookSessionIsLoading,
    updateSessionDoc,
    updateUserDocBalance,
    resetSessionDoc,
    addSessionBookingInfo,
    childrenSelectedForBooking,
  };
};

export default useGetBookSessionSelectors;
