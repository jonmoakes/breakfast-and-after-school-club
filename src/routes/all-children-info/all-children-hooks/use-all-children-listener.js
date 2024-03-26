import { useEffect } from "react";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetAllChildrenSelectors from "../../../hooks/get-selectors/use-get-all-children-selectors";
import useGetAllChildrenActions from "../../../hooks/get-actions-and-thunks/get-all-children-actions-and-thunks/use-get-all-children-actions";

const useAllChildrenListener = () => {
  const { allChildren } = useGetAllChildrenSelectors();
  const { databaseId, childrenCollectionId, currentUser } =
    useGetCurrentUserSelectors();
  const { dispatchSetAllChildren } = useGetAllChildrenActions();

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

          dispatchSetAllChildren(updatedEntries);
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

            dispatchSetAllChildren(updatedEntries);
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...allChildren, updatedEntry];
            dispatchSetAllChildren(updatedEntries);
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatchSetAllChildren,
    currentUser,
    allChildren,
    childrenCollectionId,
    databaseId,
  ]);
};

export default useAllChildrenListener;
