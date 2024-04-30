import { useEffect } from "react";

import useRequestBookingClosingTimesThunk from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-booking-closing-times-thunk";
import useBookingClosingTimesVariables from "./use-booking-closing-times-variables";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingBookingClosingTimeMessage,
} from "../../../strings/errors/errors-strings";
import { bookingClosingTimeUpdatedMessage } from "../../../strings/successes/successes-strings";

const useUpdateBookingClosingTimeResultSwal = () => {
  const { bookingClosingTimeResult, bookingClosingTimeError } =
    useBookingClosingTimesVariables();
  const { requestBookingClosingTimesThunk } =
    useRequestBookingClosingTimesThunk();
  const {
    dispatchResetBookingClosingTimeResult,
    dispatchResetBookingClosingTimeError,
    dispatchResetNewMorningBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!bookingClosingTimeResult && !bookingClosingTimeError) return;

    if (bookingClosingTimeResult === "fulfilled") {
      fireSwal(
        "success",
        bookingClosingTimeUpdatedMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetBookingClosingTimeResult();
          dispatchResetNewMorningBookingClosingTime();
          dispatchResetNewAfternoonBookingClosingTime();
          //so UI updates with new value
          requestBookingClosingTimesThunk();
        }
      });
    } else {
      const error = bookingClosingTimeError;
      fireSwal(
        "error",
        errorUpdatingBookingClosingTimeMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetBookingClosingTimeResult();
          dispatchResetBookingClosingTimeError();
        }
      });
    }
  }, [
    bookingClosingTimeResult,
    bookingClosingTimeError,
    dispatchResetBookingClosingTimeResult,
    dispatchResetBookingClosingTimeError,
    dispatchResetNewMorningBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
    fireSwal,
    requestBookingClosingTimesThunk,
  ]);
};

export default useUpdateBookingClosingTimeResultSwal;
