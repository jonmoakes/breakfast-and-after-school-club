import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserBookingsAsync } from "../../../store/user-bookings/user-bookings.slice";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";

const useGetUserBookings = () => {
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { email } = currentUser;
  const { databaseId, bookedSessionsCollectionId } = envVariables;

  useEffect(() => {
    if (!currentUser) return;
    dispatch(
      getUserBookingsAsync({ email, databaseId, bookedSessionsCollectionId })
    );
  }, [dispatch, currentUser, email, databaseId, bookedSessionsCollectionId]);
};

export default useGetUserBookings;
