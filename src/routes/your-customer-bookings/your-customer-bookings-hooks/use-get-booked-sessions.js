import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBookedSessionsAsync } from "../../../store/booked-sessions/booked-sessions.slice";

import { selectCurrentUser } from "../../../store/user/user.selector";

const useGetBookedSessions = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getBookedSessionsAsync());
  }, [dispatch, currentUser]);
};

export default useGetBookedSessions;
