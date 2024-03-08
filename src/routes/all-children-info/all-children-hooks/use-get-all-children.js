import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllChildrenAsync } from "../../../store/get-all-children/get-all-children.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useGetAllChildren = () => {
  const { currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const { databaseId, childrenCollectionId: collectionId } =
    currentUserEnvironmentVariables;

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

export default useGetAllChildren;
