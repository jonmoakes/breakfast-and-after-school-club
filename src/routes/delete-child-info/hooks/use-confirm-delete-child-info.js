import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetDeleteChildInfoSelectors from "../../../hooks/get-selectors/use-get-delete-child-info-selectors";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { deleteChildInfoAsync } from "../../../store/delete-child-info/delete-child-info.thunks";

import {
  confirmDeleteChildMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();
  const { childToDeleteInfo } = useGetDeleteChildInfoSelectors();
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

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
