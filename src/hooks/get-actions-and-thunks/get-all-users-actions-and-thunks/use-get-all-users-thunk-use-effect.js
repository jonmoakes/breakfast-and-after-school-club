import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { getAllUsersAsync } from "../../../store/get-all-users/get-all-users.thunks";

const useGetAllUsersThunkUseEffect = () => {
  const {
    databaseId,
    userCollectionId: collectionId,
    id,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllUsersAsync({
        databaseId,
        collectionId,
        id,
      })
    );
  }, [databaseId, collectionId, id, dispatch]);
};

export default useGetAllUsersThunkUseEffect;
