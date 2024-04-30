import { useEffect } from "react";

import useRequestSessionPricesThunk from "../../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-request-session-prices-thunk";
import useSessionPricesVariables from "./use-session-prices-variables";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingSessionTime,
} from "../../../strings/errors/errors-strings";
import { sessionPriceUpdatedMessage } from "../../../strings/successes/successes-strings";

const useUpdateSessionPriceResultSwal = () => {
  const { sessionPricesResult, sessionPricesError } =
    useSessionPricesVariables();
  const { requestSessionPricesThunk } = useRequestSessionPricesThunk();
  const {
    dispatchResetSessionPricesResult,
    dispatchResetSessionPricesError,
    dispatchResetNewSessionPricesDetails,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!sessionPricesResult && !sessionPricesError) return;

    if (sessionPricesResult === "fulfilled") {
      fireSwal("success", sessionPriceUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetSessionPricesResult();
            dispatchResetNewSessionPricesDetails();
            requestSessionPricesThunk();
          }
        }
      );
    } else {
      const error = sessionPricesError;
      fireSwal(
        "error",
        errorUpdatingSessionTime,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetSessionPricesResult();
          dispatchResetSessionPricesError();
        }
      });
    }
  }, [
    dispatchResetSessionPricesResult,
    dispatchResetSessionPricesError,
    sessionPricesResult,
    sessionPricesError,
    dispatchResetNewSessionPricesDetails,
    fireSwal,
    requestSessionPricesThunk,
  ]);
};

export default useUpdateSessionPriceResultSwal;
