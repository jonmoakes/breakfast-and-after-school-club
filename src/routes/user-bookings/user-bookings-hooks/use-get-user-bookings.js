import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserBookingsAsync } from "../../../store/user-bookings/user-bookings.slice";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useGetUserBookings = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  const { email } = currentUser;
  const { databaseId, bookedSessionsCollectionId } =
    currentUserEnvironmentVariables;

  useEffect(() => {
    if (!currentUser) return;
    dispatch(
      getUserBookingsAsync({ email, databaseId, bookedSessionsCollectionId })
    );
  }, [dispatch, currentUser, email, databaseId, bookedSessionsCollectionId]);
};

export default useGetUserBookings;
