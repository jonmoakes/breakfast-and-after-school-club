import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingUsersBalanceMessage,
} from "../../../strings/errors/errors-strings";
import { userBalanceUpdatedMessage } from "../../../strings/successes/successes-strings";
import {
  databaseManagementRoute,
  databaseManagementUpdateSessionSpacesRoute,
} from "../../../strings/routes/routes-strings";

const useUpdateBalanceResultSwal = () => {
  const { updateBalanceResult, updateBalanceError, errorId } =
    useGetDatabaseManagementSelectors();
  const { dispatchResetUpdateBalanceResult, dispatchResetUpdateBalanceError } =
    useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!updateBalanceResult && !updateBalanceError) return;

    if (updateBalanceResult === "fulfilled") {
      fireSwal("success", userBalanceUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if ((isConfirmed && errorId === "1") || (isConfirmed && !errorId)) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          } else if (isConfirmed && errorId === "3") {
            hamburgerHandlerNavigate(
              databaseManagementUpdateSessionSpacesRoute
            );
          }
        }
      );
    } else {
      const error = updateBalanceError;
      fireSwal(
        "error",
        errorUpdatingUsersBalanceMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateBalanceResult();
          dispatchResetUpdateBalanceError();
        }
      });
    }
  }, [
    dispatchResetUpdateBalanceError,
    dispatchResetUpdateBalanceResult,
    fireSwal,
    hamburgerHandlerNavigate,
    updateBalanceError,
    updateBalanceResult,
    errorId,
  ]);
};

export default useUpdateBalanceResultSwal;
