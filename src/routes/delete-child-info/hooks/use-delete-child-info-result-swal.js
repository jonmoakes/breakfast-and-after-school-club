import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectResult,
  selectError,
} from "../../../store/delete-child-info/delete-child-info.selector";
import {
  resetDeleteChildInfoState,
  resetError,
  resetResult,
} from "../../../store/delete-child-info/delete-child-info.slice";

import {
  childDeletedMessage,
  childInfoRoute,
  errorDeletingChildMessage,
  errorReceivedMessage,
} from "../../../strings/strings";

const useDeleteChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectResult);
  const error = useSelector(selectError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!result) return;

    if (result === "fulfilled") {
      fireSwal("success", childDeletedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetDeleteChildInfoState());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (result === "rejected") {
      fireSwal(
        "error",
        errorDeletingChildMessage,
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

export default useDeleteChildInfoResultSwal;
