import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import { errorReceivedMessage } from "../../../../strings/errors/errors-strings";
import { documentUpdatedMessage } from "../../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";

const useUpdateDocumentResultSwal = () => {
  const { databaseManagementResult, databaseManagementError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetDatabaseManagementResult,
    dispatchResetDatabaseManagementError,
  } = useDatabaseManagementActions();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!databaseManagementResult && !databaseManagementError) return;

    if (databaseManagementResult === "fulfilled") {
      fireSwal("success", documentUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else {
      const error = databaseManagementError;
      fireSwal(
        "error",
        "error updating document",
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
    hamburgerHandlerNavigate,
    fireSwal,
  ]);
};

export default useUpdateDocumentResultSwal;
