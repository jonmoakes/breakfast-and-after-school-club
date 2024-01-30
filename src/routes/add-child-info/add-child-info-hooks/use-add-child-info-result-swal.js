import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetAllChildInfoState,
  resetAddChildInfoError,
  resetAddChildInfoResult,
  selectAddChildInfoResult,
  selectAddChildInfoError,
} from "../../../store/add-child-info/add-child-info.slice";

import {
  appwriteAgeAttributeError,
  childAddedMessage,
  childInfoRoute,
  errorAddingChild,
  errorReceivedMessage,
} from "../../../strings/strings";

const useAddChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectAddChildInfoResult);
  const error = useSelector(selectAddChildInfoError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // removes part of the error message for user readability.
  const errorTextToRemove = error ? error.indexOf("must be") : null;
  const ageErrorForUser = errorTextToRemove
    ? `the childs age ${error.slice(errorTextToRemove)}`
    : null;

  const resetResultAndError = useCallback(() => {
    dispatch(resetAddChildInfoResult());
    dispatch(resetAddChildInfoError());
  }, [dispatch]);

  useEffect(() => {
    if (!result) return;

    if (result === "fulfilled") {
      fireSwal("success", childAddedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetAllChildInfoState());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (result === "rejected") {
      if (error.includes(appwriteAgeAttributeError)) {
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
          errorReceivedMessage(error),
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
    result,
    error,
    fireSwal,
    navigate,
    dispatch,
    ageErrorForUser,
    resetResultAndError,
  ]);
};

export default useAddChildInfoResultSwal;
