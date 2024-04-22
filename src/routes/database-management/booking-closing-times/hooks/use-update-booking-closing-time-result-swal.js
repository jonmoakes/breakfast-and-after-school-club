import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";
import {
  errorReceivedMessage,
  errorUpdatingBookingClosingTimeMessage,
} from "../../../../strings/errors/errors-strings";
import { bookingClosingTimeUpdatedMessage } from "../../../../strings/successes/successes-strings";
import useRequestBookingClosingTimesThunk from "../../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-booking-closing-times-thunk";

const useUpdateBookingClosingTimeResultSwal = () => {
  const { databaseManagementResult, databaseManagementError } =
    useGetDatabaseManagementSelectors();
  const { requestBookingClosingTimesThunk } =
    useRequestBookingClosingTimesThunk();
  const {
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetNewMorningBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!databaseManagementResult && !databaseManagementError) return;

    if (databaseManagementResult === "fulfilled") {
      fireSwal(
        "success",
        bookingClosingTimeUpdatedMessage,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetDatabaseManagementResult();
          dispatchResetNewMorningBookingClosingTime();
          dispatchResetNewAfternoonBookingClosingTime();
          //so UI updates with new value
          requestBookingClosingTimesThunk();
        }
      });
    } else {
      const error = databaseManagementError;
      fireSwal(
        "error",
        errorUpdatingBookingClosingTimeMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetDatabaseManagementResult();
          dispatchResetDatabaseManagementError();
        }
      });
    }
  }, [
    databaseManagementResult,
    databaseManagementError,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementResult,
    dispatchResetNewMorningBookingClosingTime,
    dispatchResetNewAfternoonBookingClosingTime,
    fireSwal,
    requestBookingClosingTimesThunk,
  ]);
};

export default useUpdateBookingClosingTimeResultSwal;
