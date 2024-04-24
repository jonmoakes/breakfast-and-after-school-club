import { useEffect } from "react";

import useRequestSessionPricesThunk from "../../../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-request-session-prices-thunk";
import useDbManagementVariables from "../../db-management-hooks/use-db-management-variables";
import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingSessionTime,
} from "../../../../strings/errors/errors-strings";
import { sessionPriceUpdatedMessage } from "../../../../strings/successes/successes-strings";

const useUpdateSessionPriceResultSwal = () => {
  const { databaseManagementResult, databaseManagementError } =
    useDbManagementVariables();
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();
  const {
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
    dispatchResetNewSessionPricesDetails,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!databaseManagementResult && !databaseManagementError) return;

    if (databaseManagementResult === "fulfilled") {
      fireSwal("success", sessionPriceUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetDatabaseManagementResult();
            dispatchResetNewSessionPricesDetails();
            requestSessionPricesThunk();
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
    dispatchResetNewSessionPricesDetails,
    dispatchResetDatabaseManagementError,
    dispatchResetDatabaseManagementResult,
    fireSwal,
    requestSessionPricesThunk,
  ]);
};

export default useUpdateSessionPriceResultSwal;
