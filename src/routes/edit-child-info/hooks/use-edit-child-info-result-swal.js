import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useEditChildInfoActions from "../../../hooks/get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";

import {
  appwriteAgeAttributeErrorMessage,
  errorUpdatingChildGenericError,
  errorUpdatingChild,
} from "../../../strings/errors/errors-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";
import { childUpdatedMessage } from "../../../strings/successes/successes-strings";
import useEditChildInfoLogic from "./use-edit-child-info-logic";

const useEditChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const {
    dispatchResetEditChildInfoError,
    dispatchResetEditChildInfoResult,
    dispatchResetEditChildInfoState,
  } = useEditChildInfoActions();
  const { ageErrorForUser, editChildInfoError, editChildInfoResult } =
    useEditChildInfoLogic();

  const navigate = useNavigate();

  const resetResultAndError = useCallback(() => {
    dispatchResetEditChildInfoError();
    dispatchResetEditChildInfoResult();
  }, [dispatchResetEditChildInfoError, dispatchResetEditChildInfoResult]);

  useEffect(() => {
    if (!editChildInfoResult) return;

    if (editChildInfoResult === "fulfilled") {
      fireSwal("success", childUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetEditChildInfoState();
            navigate(childInfoRoute);
          }
        }
      );
    } else if (editChildInfoResult === "rejected") {
      if (editChildInfoError.includes(appwriteAgeAttributeErrorMessage)) {
        fireSwal(
          "error",
          errorUpdatingChild,
          ageErrorForUser,
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            resetResultAndError();
          }
        });
      } else {
        fireSwal(
          "error",
          errorUpdatingChildGenericError(editChildInfoError),
          "",
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            resetResultAndError();
          }
        });
      }
    }
  }, [
    editChildInfoResult,
    editChildInfoError,
    fireSwal,
    navigate,
    dispatchResetEditChildInfoState,
    ageErrorForUser,
    resetResultAndError,
  ]);
};

export default useEditChildInfoResultSwal;
