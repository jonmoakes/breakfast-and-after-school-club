import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import { fetchBookedSessionsUserAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useFetchBookedSessionsUser = () => {
  const {
    currentUser,
    id,
    databaseId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(
      fetchBookedSessionsUserAsync({
        id,
        databaseId,
        bookedSessionsCollectionId,
      })
    ).then((resultAction) => {
      if (fetchBookedSessionsUserAsync.fulfilled.match(resultAction)) {
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
    });
  }, [
    dispatch,
    currentUser,
    id,
    databaseId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
  ]);
};

export default useFetchBookedSessionsUser;
