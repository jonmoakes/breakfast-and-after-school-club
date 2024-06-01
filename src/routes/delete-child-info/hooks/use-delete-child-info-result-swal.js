import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../../hooks/use-fire-swal";
import useGetDeleteChildInfoSelectors from "../../../hooks/get-selectors/use-get-delete-child-info-selectors";
import useDeleteChildInfoActions from "../../../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-actions";

import { errorDeletingChildMessage } from "../../../strings/errors/errors-strings";
import { childDeletedMessage } from "../../../strings/successes/successes-strings";
import { childInfoRoute } from "../../../strings/routes/routes-strings";

const useDeleteChildInfoResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { deleteChildInfoResult, deleteChildInfoError } =
    useGetDeleteChildInfoSelectors();
  const {
    dispatchResetDeleteChildInfoError,
    dispatchResetDeleteChildInfoResult,
    dispatchResetDeleteChildInfoState,
  } = useDeleteChildInfoActions();

  const navigate = useNavigate();

  useEffect(() => {
    if (!deleteChildInfoResult) return;

    if (deleteChildInfoResult === "fulfilled") {
      fireSwal("success", childDeletedMessage, "", 0, true, false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatchResetDeleteChildInfoState();
            navigate(childInfoRoute);
          }
        }
      );
    } else if (deleteChildInfoResult === "rejected") {
      fireSwal(
        "error",
        errorDeletingChildMessage(deleteChildInfoError),
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetDeleteChildInfoError();
          dispatchResetDeleteChildInfoResult();
        }
      });
    }
  }, [
    deleteChildInfoError,
    deleteChildInfoResult,
    fireSwal,
    navigate,
    dispatchResetDeleteChildInfoError,
    dispatchResetDeleteChildInfoResult,
    dispatchResetDeleteChildInfoState,
  ]);
};

export default useDeleteChildInfoResultSwal;
