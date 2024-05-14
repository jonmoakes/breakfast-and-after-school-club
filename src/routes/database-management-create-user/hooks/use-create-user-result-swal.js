import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useCreateUserResultSwal = () => {
  const { createUserDocumentResult, createUserDocumentError } =
    useGetDatabaseManagementSelectors();
  const {
    dispatchResetCreateUserDocumentResult,
    dispatchResetCreateUserDocumentError,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!createUserDocumentResult && !createUserDocumentError) return;

    if (createUserDocumentResult === "fulfilled") {
      fireSwal("success", "user created!", "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else {
      const error = createUserDocumentError;
      fireSwal(
        "error",
        "error creating user",
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetCreateUserDocumentResult();
          dispatchResetCreateUserDocumentError();
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    createUserDocumentResult,
    createUserDocumentError,
    dispatchResetCreateUserDocumentResult,
    dispatchResetCreateUserDocumentError,
  ]);
};

export default useCreateUserResultSwal;
