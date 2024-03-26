import { useEffect } from "react";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import useGetUsersChildrenActions from "../../../hooks/get-actions-and-thunks/get-users-children-actions-and-thunks/use-get-users-children-actions";

const useGetUsersChildrenListener = () => {
  const {
    databaseId,
    childrenCollectionId: collectionId,
    currentUser,
  } = useGetCurrentUserSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { dispatchSetUsersChildren } = useGetUsersChildrenActions();

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
        dispatchSetUsersChildren(updatedChildren);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatchSetUsersChildren,
    currentUser,
    usersChildren,
    databaseId,
    collectionId,
  ]);
};

export default useGetUsersChildrenListener;
