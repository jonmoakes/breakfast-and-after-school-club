import { useEffect } from "react";

import useRequestSessionTimesThunk from "../../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-session-times-thunk";
import useDbManagementVariables from "../../db-management-hooks/use-db-management-variables";
import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingSessionTime,
} from "../../../../strings/errors/errors-strings";
import { sessionTimeUpdatedMessage } from "../../../../strings/successes/successes-strings";

const useUpdateBookingClosingTimeResultSwal = () => {
  const { databaseManagementResult, databaseManagementError } =
    useDbManagementVariables();
  const { requestSessionTimesThunk } = useRequestSessionTimesThunk();
  const {
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetNewSessionTimesDetails,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!databaseManagementResult && !databaseManagementError) return;

    if (databaseManagementResult === "fulfilled") {
      fireSwal("success", sessionTimeUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetDatabaseManagementResult();
            dispatchResetNewSessionTimesDetails();
            requestSessionTimesThunk();
          }
        }
      );
    } else {
      const error = databaseManagementError;
      fireSwal(
        "error",
        errorUpdatingSessionTime,
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
    dispatchResetNewSessionTimesDetails,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementResult,
    fireSwal,
    requestSessionTimesThunk,
  ]);
};

export default useUpdateBookingClosingTimeResultSwal;
