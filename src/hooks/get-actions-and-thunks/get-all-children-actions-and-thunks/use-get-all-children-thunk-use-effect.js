import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { getAllChildrenAsync } from "../../../store/get-all-children/get-all-children.thunks";

const useGetAllChildrenThunkUseEffect = () => {
  const { databaseId, childrenCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllChildrenAsync({
        databaseId,
        collectionId,
      })
    );
  }, [databaseId, collectionId, dispatch]);
};

export default useGetAllChildrenThunkUseEffect;
