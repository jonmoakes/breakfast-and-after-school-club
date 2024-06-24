import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetRequestDateDataSelectors from "../../get-selectors/use-get-request-date-data-selectors";

import {
  requestAllDatesForCurrentMonthAsync,
  requestBookingClosingTimesAsync,
} from "../../../store/request-date-data/request-date-data.thunks";

const useGetCurrentMonthDateDataAndBookingClosingTimesUseEffect = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const {
    databaseId,
    termDatesCollectionId,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
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
    });
  }, [
    databaseId,
    termDatesCollectionId,
    dispatch,
    bookingClosingTimesCollectionId,
    bookingClosingTimesDocumentId,
    bookingClosingTimes,
    monthNumericString,
    yearNumericString,
  ]);
};

export default useGetCurrentMonthDateDataAndBookingClosingTimesUseEffect;
