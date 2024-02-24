import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectEnvironmentVariables } from "../../../store/user/user.selector";
import { selectRequestDateDataSelectors } from "../../../store/request-date-data/request-date-data.slice";
import {
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
  requestBookingClosingTimesAsync,
  requestSessionTimesAsync,
} from "../../../store/request-date-data/request-date-data.thunks";

const useGetDateDataEarlyFinishDatesAndBookingClosingTimes = () => {
  const { chosenDate, earlyFinishDates, bookingClosingTimes, sessionTimes } =
    useSelector(selectRequestDateDataSelectors);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const {
    databaseId,
    termDatesCollectionId: collectionId,
    earlyFinishDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    sessionTimesCollectionId,
    sessionTimesDocumentId,
  } = envVariables;

  useEffect(() => {
    if (!chosenDate) return;

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
    collectionId,
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
