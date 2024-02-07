import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBookedSessionsAsync } from "../../../store/booked-sessions/booked-sessions-thunks";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";

const useGetBookedSessions = () => {
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { databaseId, bookedSessionsCollectionId: collectionId } = envVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getBookedSessionsAsync({ databaseId, collectionId }));
  }, [dispatch, currentUser, databaseId, collectionId]);
};

export default useGetBookedSessions;
