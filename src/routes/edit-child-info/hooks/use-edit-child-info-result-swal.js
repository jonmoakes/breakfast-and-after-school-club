import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetEditChildInfoSelectors from "../../../hooks/get-selectors/use-get-edit-child-info-selectors";
import useEditChildInfoActions from "../../../hooks/get-actions-and-thunks/edit-child-info-actions-and-thunks/use-edit-child-info-actions";

import {
  errorReceivedMessage,
  errorUpdatingChild,
} from "../../../strings/errors/errors-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";
import { childUpdatedMessage } from "../../../strings/successes/successes-strings";

const useEditChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { editChildInfoResult, editChildInfoError } =
    useGetEditChildInfoSelectors();
  const {
    dispatchResetEditChildInfoError,
    dispatchResetEditChildInfoResult,
    dispatchResetEditChildInfoState,
  } = useEditChildInfoActions();

  const navigate = useNavigate();

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
      fireSwal(
        "error",
        errorUpdatingChild,
        errorReceivedMessage(editChildInfoError),
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetEditChildInfoResult();
          dispatchResetEditChildInfoError();
        }
      });
    }
  }, [
    editChildInfoResult,
    editChildInfoError,
    fireSwal,
    navigate,
    dispatchResetEditChildInfoError,
    dispatchResetEditChildInfoResult,
    dispatchResetEditChildInfoState,
  ]);
};

export default useEditChildInfoResultSwal;
