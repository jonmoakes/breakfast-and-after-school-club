import { useDispatch } from "react-redux";
import {
  addChildToDelete,
  resetChildToDeleteInfo,
  resetDeleteChildInfoError,
  resetDeleteChildInfoResult,
  resetDeleteChildInfoState,
} from "../../../store/delete-child-info/delete-child-info.slice";

const useDeleteChildInfoActions = () => {
  const dispatch = useDispatch();

  const dispatchAddChildToDelete = (chosenEntry) => {
    dispatch(addChildToDelete(chosenEntry));
  };

  const dispatchResetChildToDeleteInfo = () => {
    dispatch(resetChildToDeleteInfo());
  };

  const dispatchResetDeleteChildInfoError = () => {
    dispatch(resetDeleteChildInfoError());
  };

  const dispatchResetDeleteChildInfoResult = () => {
    dispatch(resetDeleteChildInfoResult());
  };

  const dispatchResetDeleteChildInfoState = () => {
    dispatch(resetDeleteChildInfoState());
  };

  return {
    dispatchAddChildToDelete,
    dispatchResetChildToDeleteInfo,
    dispatchResetDeleteChildInfoError,
    dispatchResetDeleteChildInfoResult,
    dispatchResetDeleteChildInfoState,
  };
};

export default useDeleteChildInfoActions;
