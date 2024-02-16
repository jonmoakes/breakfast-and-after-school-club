import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  resetDeleteChildInfoState,
  resetDeleteChildInfoResult,
  resetDeleteChildInfoError,
  selectDeleteChildInfoSelectors,
} from "../../../store/delete-child-info/delete-child-info.slice";

import {
  childDeletedMessage,
  childInfoRoute,
  errorDeletingChildMessage,
  errorReceivedMessage,
} from "../../../strings/strings";

const useDeleteChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const { deleteChildInfoResult, deleteChildInfoError } = useSelector(
    selectDeleteChildInfoSelectors
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!deleteChildInfoResult) return;

    if (deleteChildInfoResult === "fulfilled") {
      fireSwal("success", childDeletedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetDeleteChildInfoState());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (deleteChildInfoResult === "rejected") {
      fireSwal(
        "error",
        errorDeletingChildMessage,
        errorReceivedMessage(deleteChildInfoError),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteChildInfoError());
          dispatch(resetDeleteChildInfoResult());
        }
      });
    }
  }, [
    deleteChildInfoError,
    deleteChildInfoResult,
    fireSwal,
    navigate,
    dispatch,
  ]);
};

export default useDeleteChildInfoResultSwal;
