import { useDispatch } from "react-redux";

import useGetAddChildInfoSelectors from "../../get-selectors/use-get-add-child-info-selectors";

import {
  resetAddChildInfoError,
  resetAddChildInfoResult,
  resetAllChildInfoState,
  setChildInfo,
} from "../../../store/add-child-info/add-child-info.slice";

const useAddChildInfoActions = () => {
  const { childInfo } = useGetAddChildInfoSelectors();

  const dispatch = useDispatch();

  const handleAddChildInfoChange = (event) => {
    const { value, name } = event.target;
    dispatch(setChildInfo({ ...childInfo, [name]: value }));
  };

  const dispatchResetAddChildInfoResult = () => {
    dispatch(resetAddChildInfoResult());
  };

  const dispatchResetAddChildInfoError = () => {
    dispatch(resetAddChildInfoError());
  };

  const dispatchResetAllAddChildInfoState = () => {
    dispatch(resetAllChildInfoState());
  };

  return {
    handleAddChildInfoChange,
    dispatchResetAddChildInfoResult,
    dispatchResetAddChildInfoError,
    dispatchResetAllAddChildInfoState,
  };
};

export default useAddChildInfoActions;
