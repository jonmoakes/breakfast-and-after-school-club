import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsersAsync } from "../../../store/get-all-users/get-all-users.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

const useGetAllUsers = () => {
  const { currentUserEnvironmentVariables, currentUser } = useSelector(
    selectCurrentUserSelectors
  );

  const { id } = currentUser;
  const { databaseId, userCollectionId: collectionId } =
    currentUserEnvironmentVariables;

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

export default useGetAllUsers;
