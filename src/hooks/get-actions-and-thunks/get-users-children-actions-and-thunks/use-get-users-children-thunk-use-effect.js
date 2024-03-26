import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { getUsersChildrenAsync } from "../../../store/get-users-children/get-users-children.thunks";

const useGetUsersChildrenThunkUseEffect = () => {
  const dispatch = useDispatch();

  const {
    id,
    databaseId,
    childrenCollectionId: collectionId,
  } = useGetCurrentUserSelectors();

  useEffect(() => {
    dispatch(
      getUsersChildrenAsync({
        id,
        databaseId,
        collectionId,
      })
    );
  }, [collectionId, databaseId, id, dispatch]);
};

export default useGetUsersChildrenThunkUseEffect;
