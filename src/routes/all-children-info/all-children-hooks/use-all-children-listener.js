import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import {
  selectGetAllChildrenSelectors,
  setAllChildren,
} from "../../../store/get-all-children/get-all-children.slice";

const useAllChildrenListener = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { allChildren } = useSelector(selectGetAllChildrenSelectors);

  const { databaseId, childrenCollectionId } = currentUserEnvironmentVariables;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${childrenCollectionId}.documents`,

      (response) => {
        const updatedEntry = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = updatedEntry.$id;

          const updatedEntries = allChildren.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setAllChildren(updatedEntries));
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = allChildren.findIndex(
            (session) => session.$id === updatedEntry.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = allChildren.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...updatedEntry }
                : session
            );

            dispatch(setAllChildren(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            dispatch(setAllChildren([...allChildren, updatedEntry]));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, currentUser, allChildren, childrenCollectionId, databaseId]);
};

export default useAllChildrenListener;
