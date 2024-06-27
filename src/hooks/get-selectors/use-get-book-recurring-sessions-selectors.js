import { useSelector } from "react-redux";

import { selectBookRecurringSessionsSelectors } from "../../store/book-recurring-sessions/book-recurring-sessions.slice";

const useGetBookRecurringSessionsSelectors = () => {
  const {
    bookRecurringSessionsIsLoading,
    dayChoice,
    sessionChoice,
    bookingsToAdd,
    showConfirmButton,
    showHelp,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addRecurringBookingsResult,
    addRecurringBookingsError,
  } = useSelector(selectBookRecurringSessionsSelectors);

  return {
    bookRecurringSessionsIsLoading,
    dayChoice,
    sessionChoice,
    bookingsToAdd,
    showConfirmButton,
    showHelp,
    updateSessionSpacesResult,
    updateSessionSpacesError,
    addRecurringBookingsResult,
    addRecurringBookingsError,
  };
};

export default useGetBookRecurringSessionsSelectors;
