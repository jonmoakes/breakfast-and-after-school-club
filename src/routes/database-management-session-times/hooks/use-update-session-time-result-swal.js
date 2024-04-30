import { useEffect } from "react";

import useRequestSessionTimesThunk from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-session-times-thunk";
import useSessionTimesVariables from "./use-session-times-variables";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingSessionTime,
} from "../../../strings/errors/errors-strings";
import { sessionTimeUpdatedMessage } from "../../../strings/successes/successes-strings";

const useUpdateSessionTimeResultSwal = () => {
  const { sessionTimeResult, sessionTimeError } = useSessionTimesVariables();
  const { requestSessionTimesThunk } = useRequestSessionTimesThunk();
  const {
    dispatchResetSessionTimeResult,
    dispatchResetSessionTimeError,
    dispatchResetNewSessionTimesDetails,
  } = useDatabaseManagementActions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!sessionTimeResult && !sessionTimeError) return;

    if (sessionTimeResult === "fulfilled") {
      fireSwal("success", sessionTimeUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetSessionTimeResult();
            dispatchResetNewSessionTimesDetails();
            requestSessionTimesThunk();
          }
        }
      );
    } else {
      const error = sessionTimeError;
      fireSwal(
        "error",
        errorUpdatingSessionTime,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetSessionTimeResult();
          dispatchResetSessionTimeError();
        }
      });
    }
  }, [
    dispatchResetSessionTimeResult,
    dispatchResetSessionTimeError,
    sessionTimeError,
    sessionTimeResult,
    dispatchResetNewSessionTimesDetails,
    fireSwal,
    requestSessionTimesThunk,
  ]);
};

export default useUpdateSessionTimeResultSwal;
