import { useDispatch } from "react-redux";

import useGetAddChildInfoSelectors from "../get-selectors/use-get-add-child-info-selectors";

import {
  resetAddChildInfoError,
  resetAddChildInfoResult,
  resetAllChildInfoState,
  setChildInfo,
} from "../../store/add-child-info/add-child-info.slice";
import { addChildInfoAsync } from "../../store/add-child-info/add-child-info.thunks";
import useGetCurrentUserSelectors from "../get-selectors/use-get-current-user-selectors";

const useAddChildInfoActions = () => {
  const { childInfo } = useGetAddChildInfoSelectors();
  const {
    id,
    name,
    databaseId,
    childrenCollectionId: collectionId,
  } = useGetCurrentUserSelectors();

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

  const dispatchAddChildInfoAsync = () => {
    dispatch(
      addChildInfoAsync({
        childInfo,
        id,
        name,
        databaseId,
        collectionId,
      })
    );
  };

  return {
    handleAddChildInfoChange,
    dispatchResetAddChildInfoResult,
    dispatchResetAddChildInfoError,
    dispatchResetAllAddChildInfoState,
    dispatchAddChildInfoAsync,
  };
};

export default useAddChildInfoActions;
