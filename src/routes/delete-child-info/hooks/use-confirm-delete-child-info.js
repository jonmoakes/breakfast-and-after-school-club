import { useSelector, useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { selectDeleteChildInfo } from "../../../store/delete-child-info/delete-child-info.selector";
import { deleteChildInfoAsync } from "../../../store/delete-child-info/delete-child-info.slice";

import {
  confirmDeleteChildMessage,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmDeleteChildInfo = () => {
  const { confirmSwal } = useConfirmSwal();

  const childInfo = useSelector(selectDeleteChildInfo);

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(deleteChildInfoAsync({ childInfo }));
  };

  const confirmDeleteChildInfo = () => {
    confirmSwal(confirmDeleteChildMessage, "", imSureMessage, confirmResult);
  };

  return { confirmDeleteChildInfo };
};

export default useConfirmDeleteChildInfo;
