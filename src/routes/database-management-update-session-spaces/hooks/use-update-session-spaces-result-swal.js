import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  errorReceivedMessage,
  errorUpdatingSessionSpacesMessage,
} from "../../../strings/errors/errors-strings";
import { sessionspacesUpdatedMessage } from "../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useUpdateSessionSpacesResultSwal = () => {
  // need to get direct from the selector to avoid rerendering causing them to be undefined
  const { updateSessionSpacesResult, updateSessionSpacesError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetUpdateSessionSpacesResult,
    dispatchResetUpdateSessionSpacesError,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!updateSessionSpacesResult && !updateSessionSpacesError) return;

    if (updateSessionSpacesResult === "fulfilled") {
      fireSwal("success", sessionspacesUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else {
      const error = updateSessionSpacesError;
      fireSwal(
        "error",
        errorUpdatingSessionSpacesMessage,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetUpdateSessionSpacesResult();
          dispatchResetUpdateSessionSpacesError();
        }
      });
    }
  }, [
    dispatchResetUpdateSessionSpacesError,
    dispatchResetUpdateSessionSpacesResult,
    updateSessionSpacesError,
    updateSessionSpacesResult,
    fireSwal,
    hamburgerHandlerNavigate,
  ]);
};

export default useUpdateSessionSpacesResultSwal;
