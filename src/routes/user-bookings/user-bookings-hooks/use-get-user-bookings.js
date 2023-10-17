import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserBookingsAsync } from "../../../store/user-bookings/user-bookings.slice";

import { selectCurrentUser } from "../../../store/user/user.selector";

const useGetUserBookings = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const { email } = currentUser;

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getUserBookingsAsync({ email }));
  }, [dispatch, currentUser, email]);
};

export default useGetUserBookings;
