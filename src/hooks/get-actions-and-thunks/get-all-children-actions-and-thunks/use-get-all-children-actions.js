import { useDispatch } from "react-redux";
import {
  resetGetAllChildrenError,
  resetGetAllChildrenState,
  setAllChildren,
} from "../../../store/get-all-children/get-all-children.slice";

const useGetAllChildrenActions = () => {
  const dispatch = useDispatch();

  const dispatchSetAllChildren = (updatedEntries) => {
    dispatch(setAllChildren(updatedEntries));
  };

  const dispatchResetGetAllChildrenError = () => {
    dispatch(resetGetAllChildrenError());
  };

  const dispatchResetGetAllChildrenState = () => {
    dispatch(resetGetAllChildrenState());
  };

  return {
    dispatchSetAllChildren,
    dispatchResetGetAllChildrenError,
    dispatchResetGetAllChildrenState,
  };
};

export default useGetAllChildrenActions;
