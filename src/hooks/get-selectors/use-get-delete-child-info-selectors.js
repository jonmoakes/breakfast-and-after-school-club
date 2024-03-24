import { useSelector } from "react-redux";

import { selectDeleteChildInfoSelectors } from "../../store/delete-child-info/delete-child-info.slice";

const useGetDeleteChildInfoSelectors = () => {
  const {
    deleteChildInfoIsLoading,
    childToDeleteInfo,
    deleteChildInfoResult,
    deleteChildInfoError,
  } = useSelector(selectDeleteChildInfoSelectors);

  const { childName } = childToDeleteInfo || {};

  return {
    deleteChildInfoIsLoading,
    childToDeleteInfo,
    deleteChildInfoResult,
    deleteChildInfoError,
    childName,
  };
};

export default useGetDeleteChildInfoSelectors;
