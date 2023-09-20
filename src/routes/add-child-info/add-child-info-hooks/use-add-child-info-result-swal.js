import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectResult,
  selectError,
} from "../../../store/add-child-info/add-child-info.selector";
import {
  resetError,
  resetResult,
} from "../../../store/add-child-info/add-child-info.slice";

import {
  childAddedMessage,
  childInfoRoute,
  errorAddingChild,
  errorAddingChildDetail,
} from "../../../strings/strings";

const useAddChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();

  const result = useSelector(selectResult);
  const error = useSelector(selectError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!result) return;

    if (result === "fulfilled") {
      fireSwal("success", childAddedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetResult());
            navigate(childInfoRoute);
          }
        }
      );
    } else if (result === "rejected") {
      fireSwal(
        "error",
        errorAddingChild,
        errorAddingChildDetail(error),
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

export default useAddChildInfoResultSwal;
