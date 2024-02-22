import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import {
  selectGetUsersChildrenSelectors,
  setUsersChildren,
} from "../../../store/get-users-children/get-users-children.slice";

const useGetUsersChildrenListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const { databaseId, childrenCollectionId: collectionId } = envVariables;

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${collectionId}.documents`,

      (response) => {
        const updatedChild = response.payload;
        //Find the child with the matching ID, otherwise return the original child that was in the array
        const updatedChildren = usersChildren.map((child) =>
          child.$id === updatedChild.$id ? { ...child, ...updatedChild } : child
        );
        dispatch(setUsersChildren(updatedChildren));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, currentUser, usersChildren, databaseId, collectionId]);
};

export default useGetUsersChildrenListener;
