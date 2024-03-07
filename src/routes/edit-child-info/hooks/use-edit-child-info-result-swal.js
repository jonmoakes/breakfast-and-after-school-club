import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetEditChildInfoState,
  resetEditChildInfoResult,
  resetEditChildInfoError,
  selectEditChildInfoSelectors,
} from "../../../store/edit-child-info/edit-child-info.slice";

import {
  errorReceivedMessage,
  errorUpdatingChild,
} from "../../../strings/errors/errors-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";
import { childUpdatedMessage } from "../../../strings/successes/successes-strings";

const useEditChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { editChildInfoResult, editChildInfoError } = useSelector(
    selectEditChildInfoSelectors
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!editChildInfoResult) return;

    if (editChildInfoResult === "fulfilled") {
      fireSwal("success", childUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetEditChildInfoState());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (editChildInfoResult === "rejected") {
      fireSwal(
        "error",
        errorUpdatingChild,
        errorReceivedMessage(editChildInfoError),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetEditChildInfoResult());
          dispatch(resetEditChildInfoError());
        }
      });
    }
  }, [editChildInfoResult, editChildInfoError, fireSwal, navigate, dispatch]);
};

export default useEditChildInfoResultSwal;
