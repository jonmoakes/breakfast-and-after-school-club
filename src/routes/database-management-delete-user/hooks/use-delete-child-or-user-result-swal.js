import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";

const useDeleteChildOrUserResultSwal = () => {
  const { deleteDocumentResult, deleteDocumentError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetDataToUpdateDocument,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!deleteDocumentResult && !deleteDocumentError) return;

    if (deleteDocumentResult === "fulfilled") {
      fireSwal("success", "document deleted!", "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetDataToUpdateDocument();
            dispatchResetDeleteDocumentResult();
          }
        }
      );
    } else {
      const error = deleteDocumentError;
      fireSwal(
        "error",
        "error deleting document",
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetDeleteDocumentResult();
          dispatchResetDeleteDocumentError();
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetDataToUpdateDocument,
    deleteDocumentResult,
    deleteDocumentError,
  ]);
};

export default useDeleteChildOrUserResultSwal;
