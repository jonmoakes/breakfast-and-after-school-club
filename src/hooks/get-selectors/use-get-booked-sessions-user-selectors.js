import { useSelector } from "react-redux";

import { selectBookedSessionsUserSelectors } from "../../store/booked-sessions-user/booked-sessions-user.slice";

const useGetBookedSessionsUserSelectors = () => {
  const {
    bookedSessionsUserIsLoading,
    bookedSessionsUser,
    sortedUserBookings,
    bookedSessionsUserError,
  } = useSelector(selectBookedSessionsUserSelectors);

  return {
    bookedSessionsUserIsLoading,
    bookedSessionsUser,
    sortedUserBookings,
    bookedSessionsUserError,
  };
};

export default useGetBookedSessionsUserSelectors;
