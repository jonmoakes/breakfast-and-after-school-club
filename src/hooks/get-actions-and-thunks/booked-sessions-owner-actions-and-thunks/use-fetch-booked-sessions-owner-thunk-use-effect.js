import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { fetchBookedSessionsOwnerAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";

const useFetchBookedSessionsOwnerThunkUseEffect = () => {
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

export default useFetchBookedSessionsOwnerThunkUseEffect;
