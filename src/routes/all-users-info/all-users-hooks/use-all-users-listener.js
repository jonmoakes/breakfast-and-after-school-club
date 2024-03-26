import { useEffect } from "react";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetAllUsersSelectors from "../../../hooks/get-selectors/use-get-all-users-selectors";
import useGetAllUsersActions from "../../../hooks/get-actions-and-thunks/get-all-users-actions-and-thunks/use-get-all-users-actions";

const useAllUsersListener = () => {
  const { allUsers } = useGetAllUsersSelectors();
  const { databaseId, userCollectionId, currentUser } =
    useGetCurrentUserSelectors();
  const { dispatchSetAllUsers } = useGetAllUsersActions();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${userCollectionId}.documents`,

      (response) => {
        const updatedEntry = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = updatedEntry.$id;

          const updatedEntries = allUsers.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatchSetAllUsers(updatedEntries);
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = allUsers.findIndex(
            (session) => session.$id === updatedEntry.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = allUsers.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...updatedEntry }
                : session
            );

            dispatchSetAllUsers(updatedEntries);
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...allUsers, updatedEntry];
            dispatchSetAllUsers(updatedEntries);
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatchSetAllUsers,
    currentUser,
    allUsers,
    userCollectionId,
    databaseId,
  ]);
};

export default useAllUsersListener;
