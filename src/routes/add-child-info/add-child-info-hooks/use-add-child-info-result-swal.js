import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddChildInfoLogic from "./use-add-child-info-logic";
import useAddChildInfoActions from "../../../hooks/get-actions/use-add-child-info-actions";

import { childAddedMessage } from "../../../strings/successes/successes-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";
import {
  errorAddingChild,
  errorReceivedMessage,
  appwriteAgeAttributeErrorMessage,
} from "../../../strings/errors/errors-strings";

const useAddChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { addChildInfoResult, addChildInfoError, ageErrorForUser } =
    useAddChildInfoLogic();
  const {
    dispatchResetAddChildInfoResult,
    dispatchResetAddChildInfoError,
    dispatchResetAllAddChildInfoState,
  } = useAddChildInfoActions();

  const navigate = useNavigate();

  const resetResultAndError = useCallback(() => {
    dispatchResetAddChildInfoResult();
    dispatchResetAddChildInfoError();
  }, [dispatchResetAddChildInfoResult, dispatchResetAddChildInfoError]);

  useEffect(() => {
    if (!addChildInfoResult) return;

    if (addChildInfoResult === "fulfilled") {
      fireSwal("success", childAddedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetAllAddChildInfoState();
            navigate(childInfoRoute);
          }
        }
      );
    } else if (addChildInfoResult === "rejected") {
      if (addChildInfoError.includes(appwriteAgeAttributeErrorMessage)) {
        fireSwal(
          "error",
          errorAddingChild,
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
          errorAddingChild,
          errorReceivedMessage(addChildInfoError),
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
    addChildInfoResult,
    addChildInfoError,
    fireSwal,
    navigate,
    ageErrorForUser,
    resetResultAndError,
    dispatchResetAllAddChildInfoState,
  ]);
};

export default useAddChildInfoResultSwal;
