import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookedSessionsOwnerAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useFetchBookedSessionsOwner = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, bookedSessionsCollectionId: collectionId } =
    currentUserEnvironmentVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(fetchBookedSessionsOwnerAsync({ databaseId, collectionId }));
  }, [dispatch, currentUser, databaseId, collectionId]);
};

export default useFetchBookedSessionsOwner;
