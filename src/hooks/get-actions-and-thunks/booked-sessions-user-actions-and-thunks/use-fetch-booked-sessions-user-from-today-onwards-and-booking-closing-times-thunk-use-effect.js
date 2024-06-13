import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { fetchBookedSessionsUserFromTodayOnwardsAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";
import { requestBookingClosingTimesAsync } from "../../../store/request-date-data/request-date-data.thunks";

const useFetchBookedSessionsUserFromTodayOnwardsAndBookingClosingTimesThunkUseEffect =
  () => {
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
        fetchBookedSessionsUserFromTodayOnwardsAsync({
          id,
          databaseId,
          bookedSessionsCollectionId,
        })
      ).then((resultAction) => {
        if (
          fetchBookedSessionsUserFromTodayOnwardsAsync.fulfilled.match(
            resultAction
          )
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

export default useFetchBookedSessionsUserFromTodayOnwardsAndBookingClosingTimesThunkUseEffect;
