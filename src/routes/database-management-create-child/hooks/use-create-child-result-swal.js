import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useCreateChildResultSwal = () => {
  const { createChildDocumentResult, createChildDocumentError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetCreateChildDocumentResult,
    dispatchResetCreateChildDocumentError,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!createChildDocumentResult && !createChildDocumentError) return;

    if (createChildDocumentResult === "fulfilled") {
      fireSwal("success", "child created!", "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else {
      const error = createChildDocumentError;
      fireSwal(
        "error",
        "error creating child",
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetCreateChildDocumentResult();
          dispatchResetCreateChildDocumentError();
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    createChildDocumentResult,
    createChildDocumentError,
    dispatchResetCreateChildDocumentResult,
    dispatchResetCreateChildDocumentError,
  ]);
};

export default useCreateChildResultSwal;
