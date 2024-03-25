import { useDispatch } from "react-redux";
import {
  addChildToEdit,
  resetChildToEditInfo,
  resetEditChildInfoError,
  resetEditChildInfoResult,
  resetEditChildInfoState,
} from "../../../store/edit-child-info/edit-child-info.slice";

const useEditChildInfoActions = () => {
  const dispatch = useDispatch();

  const dispatchAddChildToEdit = (chosenEntry) => {
    dispatch(addChildToEdit(chosenEntry));
  };

  const dispatchResetChildToEditInfo = () => {
    dispatch(resetChildToEditInfo());
  };

  const dispatchResetEditChildInfoError = () => {
    dispatch(resetEditChildInfoError());
  };

  const dispatchResetEditChildInfoResult = () => {
    dispatch(resetEditChildInfoResult());
  };

  const dispatchResetEditChildInfoState = () => {
    dispatch(resetEditChildInfoState());
  };

  return {
    dispatchAddChildToEdit,
    dispatchResetChildToEditInfo,
    dispatchResetEditChildInfoError,
    dispatchResetEditChildInfoResult,
    dispatchResetEditChildInfoState,
  };
};

export default useEditChildInfoActions;
