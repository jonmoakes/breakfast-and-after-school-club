import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectDeleteChildInfoSelectors } from "../../../store/delete-child-info/delete-child-info.slice";
import { deleteChildInfoAsync } from "../../../store/delete-child-info/delete-child-info.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

import {
  confirmDeleteChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();

  const { childToDeleteInfo } = useSelector(selectDeleteChildInfoSelectors);
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, childrenCollectionId: collectionId } =
    currentUserEnvironmentVariables;
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
