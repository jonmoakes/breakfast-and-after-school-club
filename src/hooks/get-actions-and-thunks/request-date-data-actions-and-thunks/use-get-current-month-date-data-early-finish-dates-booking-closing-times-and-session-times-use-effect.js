import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetRequestDateDataSelectors from "../../get-selectors/use-get-request-date-data-selectors";

import {
  requestAllDatesForCurrentMonthAsync,
  requestBookingClosingTimesAsync,
  requestEarlyFinishDatesAsync,
  requestSessionTimesAsync,
} from "../../../store/request-date-data/request-date-data.thunks";
import { format } from "date-fns";

const useGetCurrentMonthDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect =
  () => {
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
    } = useGetCurrentUserSelectors();

    const dispatch = useDispatch();

    const date = new Date();
    const monthNumericString = format(date, "MM");
    const yearNumericString = format(date, "yyyy");

    useEffect(() => {
      if (!monthNumericString || !yearNumericString) return;

      const collectionId = termDatesCollectionId;
      dispatch(
        requestAllDatesForCurrentMonthAsync({
          databaseId,
          collectionId,
          monthNumericString,
          yearNumericString,
        })
      ).then((resultAction) => {
        if (
          requestAllDatesForCurrentMonthAsync.fulfilled.match(resultAction) &&
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
      monthNumericString,
      yearNumericString,
    ]);
  };

export default useGetCurrentMonthDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect;
