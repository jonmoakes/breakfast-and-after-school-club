import { useEffect } from "react";

import usePasswordCheckLogic from "./use-password-check-logic";
import useFireSwal from "../../../hooks/use-fire-swal";
import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import { dbAccessPasswordError } from "../../../strings/errors/errors-strings";

const usePasswordCheckResultSwalUseEffect = () => {
  const { passwordForDbAccessResult } = usePasswordCheckLogic();
  const { dispatchResetPasswordForDbAccessResult } =
    useDatabaseManagementActions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (passwordForDbAccessResult !== "failure") return;

    fireSwal("error", dbAccessPasswordError, "", 0, true, false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          dispatchResetPasswordForDbAccessResult();
        }
      }
    );
  }, [
    passwordForDbAccessResult,
    fireSwal,
    dispatchResetPasswordForDbAccessResult,
  ]);
};

export default usePasswordCheckResultSwalUseEffect;
