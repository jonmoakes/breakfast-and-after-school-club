import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectDeleteChildInfoSelectors } from "../../../store/delete-child-info/delete-child-info.slice";
import { deleteChildInfoAsync } from "../../../store/delete-child-info/delete-child-info.thunks";
import { selectEnvironmentVariables } from "../../../store/user/user.selector";

import {
  confirmDeleteChildMessage,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();

  const { childToDeleteInfo } = useSelector(selectDeleteChildInfoSelectors);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { databaseId, childrenCollectionId: collectionId } = envVariables;
  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      deleteChildInfoAsync({ childToDeleteInfo, databaseId, collectionId })
    );
  };

  const confirmDeleteChildInfo = () => {
    confirmSwal(confirmDeleteChildMessage, "", imSureMessage, confirmResult);
  };

  return { confirmDeleteChildInfo };
};

export default useConfirmDeleteChildInfo;
