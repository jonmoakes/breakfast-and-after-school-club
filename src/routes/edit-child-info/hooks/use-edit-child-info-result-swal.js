import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectResult,
  selectError,
} from "../../../store/edit-child-info/edit-child-info.selector";
import {
  resetEditChildInfoState,
  resetError,
  resetResult,
} from "../../../store/edit-child-info/edit-child-info.slice";

import {
  childInfoRoute,
  childUpdatedMessage,
  errorReceivedMessage,
  errorUpdatingChild,
} from "../../../strings/strings";

const useEditChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectResult);
  const error = useSelector(selectError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!result) return;

    if (result === "fulfilled") {
      fireSwal("success", childUpdatedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetEditChildInfoState());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (result === "rejected") {
      fireSwal(
        "error",
        errorUpdatingChild,
        errorReceivedMessage(error),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetResult());
          dispatch(resetError());
        }
      });
    }
  }, [result, error, fireSwal, navigate, dispatch]);
};

export default useEditChildInfoResultSwal;
