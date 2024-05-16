import { useSelector } from "react-redux";

import { selectBookSessionSelectors } from "../../store/book-session/book-session.slice";

const useGetBookSessionSelectors = () => {
  const { sessionType, sessionPrice, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );

  return {
    sessionType,
    sessionPrice,
    childrenSelectedForBooking,
  };
};

export default useGetBookSessionSelectors;
