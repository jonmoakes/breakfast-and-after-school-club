import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetRequestDateDataSelectors from "../../../../hooks/get-selectors/use-get-request-date-data-selectors";
import {
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
  requestBookingClosingTimesAsync,
  requestSessionTimesAsync,
} from "../../../../store/request-date-data/request-date-data.thunks";
import useCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";

const useGetDateDataEarlyFinishDatesAndBookingClosingTimes = () => {
  const { chosenDate, earlyFinishDates, bookingClosingTimes, sessionTimes } =
    useGetRequestDateDataSelectors();
  const {
    databaseId,
    termDatesCollectionId,
    earlyFinishDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
  } = useCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenDate) return;
    const collectionId = termDatesCollectionId;

    dispatch(
      requestDateDataAsync({ databaseId, collectionId, chosenDate })
    ).then((resultAction) => {
      if (
        requestDateDataAsync.fulfilled.match(resultAction) &&
        !earlyFinishDates &&
        !bookingClosingTimes &&
        !sessionTimes
      ) {
        const collectionId = earlyFinishDatesCollectionId;

        dispatch(
          requestEarlyFinishDatesAsync({ databaseId, collectionId })
        ).then((resultAction) => {
          if (requestEarlyFinishDatesAsync.fulfilled.match(resultAction)) {
            const collectionId = bookingClosingTimesCollectionId;

            const documentId = bookingClosingTimesDocumentId;
            dispatch(
              requestBookingClosingTimesAsync({
                databaseId,
                collectionId,
                documentId,
              })
            ).then((resultAction) => {
              if (
                requestBookingClosingTimesAsync.fulfilled.match(resultAction)
              ) {
                const collectionId = sessionTimesCollectionId;

                const documentId = sessionTimesDocumentId;
                dispatch(
                  requestSessionTimesAsync({
                    databaseId,
                    collectionId,
                    documentId,
                  })
                );
              }
            });
          } else {
            return;
          }
        });
      }
    });
  }, [
    chosenDate,
    databaseId,
    termDatesCollectionId,
    dispatch,
    earlyFinishDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
    bookingClosingTimes,
    sessionTimes,
    earlyFinishDates,
  ]);
};

export default useGetDateDataEarlyFinishDatesAndBookingClosingTimes;
