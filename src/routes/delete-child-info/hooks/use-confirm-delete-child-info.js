import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useDeleteChildInfoThunk from "../../../hooks/get-actions-and-thunks/delete-child-info-actions-and-thunks/use-delete-child-info-thunk";

import {
  confirmDeleteChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChildInfo = () => {
  const { deleteChildInfoThunk } = useDeleteChildInfoThunk();
  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    deleteChildInfoThunk();
  };

  const confirmDeleteChildInfo = () => {
    confirmSwal(confirmDeleteChildMessage, "", imSureMessage, confirmResult);
  };

  return { confirmDeleteChildInfo };
};

export default useConfirmDeleteChildInfo;
