import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { setUsersChildren } from "../../../store/get-users-children/get-users-children-slice";

const useGetUsersChildrenListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const usersChildren = useSelector(selectUsersChildren);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_CHILDREN_COLLECTION_ID
      }.documents`,

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
  }, [dispatch, currentUser, usersChildren]);
};

export default useGetUsersChildrenListener;
