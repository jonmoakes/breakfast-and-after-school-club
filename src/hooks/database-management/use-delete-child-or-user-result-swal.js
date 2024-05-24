import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useGetDatabaseManagementSelectors from "../get-selectors/use-get-database-management-selectors";
import useDatabaseManagementActions from "../get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../use-fire-swal";

import { errorReceivedMessage } from "../../strings/errors/errors-strings";
import {
  databaseManagementDeleteChildRoute,
  databaseManagementDeleteUserRoute,
  databaseManagementRoute,
} from "../../strings/routes/routes-strings";
import useHamburgerHandlerNavigate from "../use-hamburger-handler-navigate";

// this hook is used almost identically in the delete child and delete user route. The only difference is what happens after a successful document deletion.
//so we reuse the hook here and just check what the path is to determine what action to take.
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
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (!deleteDocumentResult && !deleteDocumentError) return;

    if (deleteDocumentResult === "fulfilled") {
      fireSwal(
        "success",
        path === databaseManagementDeleteUserRoute
          ? "document deleted!"
          : "child deleted!",
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed && path === databaseManagementDeleteUserRoute) {
          dispatchResetDataToUpdateDocument();
          dispatchResetDeleteDocumentResult();
        } else if (isConfirmed && path === databaseManagementDeleteChildRoute) {
          dispatchResetDeleteDocumentResult();
          dispatchResetDataToUpdateDocument();
          hamburgerHandlerNavigate(databaseManagementRoute);
        }
      });
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
    dispatchResetDeleteDocumentResult,
    dispatchResetDeleteDocumentError,
    dispatchResetDataToUpdateDocument,
    deleteDocumentResult,
    deleteDocumentError,
    hamburgerHandlerNavigate,
    path,
  ]);
};

export default useDeleteChildOrUserResultSwal;
