import { useEffect } from "react";

import { client } from "../../../utils/appwrite/appwrite-config";

import useGetBookedSessionsOwnerSelectors from "../../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";
import useBookedSessionsOwnerActions from "../../../hooks/get-actions-and-thunks/booked-sessions-owner-actions-and-thunks/use-booked-session-owner-actions";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useBookedSessionsOwnerListener = () => {
  const { bookedSessionsOwner } = useGetBookedSessionsOwnerSelectors();
  const { dispatchSetBookedSessionsOwner } = useBookedSessionsOwnerActions();
  const { currentUser, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${bookedSessionsCollectionId}.documents`,

      (response) => {
        const updatedEntry = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = updatedEntry.$id;

          const updatedEntries = bookedSessionsOwner.filter(
            (session) => session.$id !== deletedEntryId
          );
          dispatchSetBookedSessionsOwner(updatedEntries);
        } else {
          // Check if the entry with the matching ID exists in the current state

          const existingEntryIndex = bookedSessionsOwner.findIndex(
            (session) => session.$id === updatedEntry.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = bookedSessionsOwner.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...updatedEntry }
                : session
            );
            dispatchSetBookedSessionsOwner(updatedEntries);
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...bookedSessionsOwner, updatedEntry];
            dispatchSetBookedSessionsOwner(updatedEntries);
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    currentUser,
    bookedSessionsOwner,
    bookedSessionsCollectionId,
    databaseId,
    dispatchSetBookedSessionsOwner,
  ]);
};

export default useBookedSessionsOwnerListener;
