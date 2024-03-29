import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCardInputResultSelectors from "../../../hooks/get-selectors/use-get-card-input-result-selectors";
import { fetchBookedSessionsOwnerAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";

const useFetchBookedSessionsOwner = () => {
  const {
    currentUser,
    databaseId,
    bookedSessionsCollectionId: collectionId,
  } = useGetCardInputResultSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(fetchBookedSessionsOwnerAsync({ databaseId, collectionId }));
  }, [dispatch, currentUser, databaseId, collectionId]);
};

export default useFetchBookedSessionsOwner;
