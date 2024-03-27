import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookedSessionsUserAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useFetchBookedSessionsUser = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const dispatch = useDispatch();

  const { id } = currentUser;
  const {
    databaseId,
    bookedSessionsCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
  } = currentUserEnvironmentVariables;

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
        dispatch(
          requestBookingClosingTimesAsync({
            databaseId,
            bookingClosingTimesCollectionId,
            bookingClosingTimesDocumentId,
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
