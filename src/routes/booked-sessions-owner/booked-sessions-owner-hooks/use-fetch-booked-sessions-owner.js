import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookedSessionsOwnerAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";
import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import { selectBookedSessionsOwnerSelectors } from "../../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useFetchBookedSessionsOwner = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { bookingClosingTimes } = useSelector(selectRequestDateDataSelectors);
  const { bookedSessionsOwner } = useSelector(
    selectBookedSessionsOwnerSelectors
  );

  const {
    databaseId,
    bookedSessionsCollectionId: collectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
  } = currentUserEnvironmentVariables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || bookedSessionsOwner.length) return;
    dispatch(fetchBookedSessionsOwnerAsync({ databaseId, collectionId })).then(
      (resultAction) => {
        if (
          fetchBookedSessionsOwnerAsync.fulfilled.match(resultAction) &&
          !bookingClosingTimes
        ) {
          const collectionId = bookingClosingTimesCollectionId;
          const documentId = bookingClosingTimesDocumentId;
          dispatch(
            requestBookingClosingTimesAsync({
              databaseId,
              collectionId,
              documentId,
            })
          );
        }
      }
    );
  }, [
    dispatch,
    currentUser,
    databaseId,
    collectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    bookingClosingTimes,
    bookedSessionsOwner,
  ]);
};

export default useFetchBookedSessionsOwner;
