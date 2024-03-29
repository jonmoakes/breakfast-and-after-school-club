import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBookedSessionsOwnerAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useFetchBookedSessionsOwner = () => {
  const {
    currentUser,
    databaseId,
    bookedSessionsCollectionId: collectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    dispatch(fetchBookedSessionsOwnerAsync({ databaseId, collectionId }));
  }, [dispatch, currentUser, databaseId, collectionId]);
};

export default useFetchBookedSessionsOwner;
