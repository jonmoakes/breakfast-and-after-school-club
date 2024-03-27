import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useThunkIdsAndNextRequestLogic from "./logic/use-thunk-ids-and-next-request-logic";
import {
  requestBookingClosingTimesAsync,
  requestDateDataAsync,
  requestEarlyFinishDatesAsync,
  requestSessionTimesAsync,
} from "../../../store/request-date-data/request-date-data.thunks";

const useGetDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect =
  () => {
    const {
      chosenDate,
      canFireRequestEarlyFinishDates,
      canFireRequestBookingClosingTimes,
      canFireRequestSessionTimes,
      databaseId,
      termDatesCollectionId,
      earlyFinishDatesCollectionId,
      bookingClosingTimesCollectionId,
      bookingClosingTimesDocumentId,
      sessionTimesCollectionId,
      sessionTimesDocumentId,
    } = useThunkIdsAndNextRequestLogic();

    const dispatch = useDispatch();

    useEffect(() => {
      if (!chosenDate) return;

      dispatch(
        requestDateDataAsync({
          databaseId,
          termDatesCollectionId,
          chosenDate,
        })
      ).then((resultAction) => {
        if (canFireRequestEarlyFinishDates(resultAction)) {
          dispatch(
            requestEarlyFinishDatesAsync({
              databaseId,
              earlyFinishDatesCollectionId,
            })
          ).then((resultAction) => {
            if (canFireRequestBookingClosingTimes(resultAction)) {
              dispatch(
                requestBookingClosingTimesAsync({
                  databaseId,
                  bookingClosingTimesCollectionId,
                  bookingClosingTimesDocumentId,
                })
              ).then((resultAction) => {
                if (canFireRequestSessionTimes(resultAction)) {
                  dispatch(
                    requestSessionTimesAsync({
                      databaseId,
                      sessionTimesCollectionId,
                      sessionTimesDocumentId,
                    })
                  );
                }
              });
            }
          });
        }
      });
    }, [
      bookingClosingTimesCollectionId,
      bookingClosingTimesDocumentId,
      canFireRequestBookingClosingTimes,
      canFireRequestEarlyFinishDates,
      canFireRequestSessionTimes,
      chosenDate,
      databaseId,
      dispatch,
      earlyFinishDatesCollectionId,
      sessionTimesCollectionId,
      sessionTimesDocumentId,
      termDatesCollectionId,
    ]);
  };

export default useGetDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect;
