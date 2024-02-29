import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBookedSessionsAsync } from "../../../store/booked-sessions/booked-sessions.thunks";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useGetBookedSessions = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, bookedSessionsCollectionId: collectionId } =
    currentUserEnvironmentVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getBookedSessionsAsync({ databaseId, collectionId }));
  }, [dispatch, currentUser, databaseId, collectionId]);
};

export default useGetBookedSessions;
