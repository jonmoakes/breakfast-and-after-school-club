import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";

const useDeleteChildOrUserResultSwal = () => {
  const { deleteChildOrUserResult, deleteChildOrUserError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetDeleteChildOrUserResult,
    dispatchResetDeleteChildOrUserError,
    dispatchResetDataToUpdateDocument,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!deleteChildOrUserResult && !deleteChildOrUserError) return;

    if (deleteChildOrUserResult === "fulfilled") {
      fireSwal("success", "document deleted!", "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetDataToUpdateDocument();
            dispatchResetDeleteChildOrUserResult();
          }
        }
      );
    } else {
      const error = deleteChildOrUserError;
      fireSwal(
        "error",
        "error deleting document",
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetDeleteChildOrUserResult();
          dispatchResetDeleteChildOrUserError();
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    deleteChildOrUserError,
    deleteChildOrUserResult,
    dispatchResetDeleteChildOrUserResult,
    dispatchResetDeleteChildOrUserError,
    dispatchResetDataToUpdateDocument,
  ]);
};

export default useDeleteChildOrUserResultSwal;
