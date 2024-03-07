import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetAllChildInfoState,
  resetAddChildInfoError,
  resetAddChildInfoResult,
  selectAddChildInfoSelectors,
} from "../../../store/add-child-info/add-child-info.slice";

import { childAddedMessage } from "../../../strings/successes/successes-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";
import {
  errorAddingChild,
  errorReceivedMessage,
  appwriteAgeAttributeErrorMessage,
} from "../../../strings/errors/errors-strings";

const useAddChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { addChildInfoResult, addChildInfoError } = useSelector(
    selectAddChildInfoSelectors
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // removes part of the error message for user readability.
  const errorTextToRemove = addChildInfoError
    ? addChildInfoError.indexOf("must be")
    : null;
  const ageErrorForUser = errorTextToRemove
    ? `the childs age ${addChildInfoError.slice(errorTextToRemove)}`
    : null;

  const resetResultAndError = useCallback(() => {
    dispatch(resetAddChildInfoResult());
    dispatch(resetAddChildInfoError());
  }, [dispatch]);

  useEffect(() => {
    if (!addChildInfoResult) return;

    if (addChildInfoResult === "fulfilled") {
      fireSwal("success", childAddedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetAllChildInfoState());
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
    dispatch,
    ageErrorForUser,
    resetResultAndError,
  ]);
};

export default useAddChildInfoResultSwal;
