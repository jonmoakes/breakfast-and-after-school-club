import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import {
  selectBookedSessionsOwnerSelectors,
  setBookedSessionsOwner,
} from "../../../store/booked-sessions-owner/booked-sessions-owner.slice";

const useBookedSessionsOwnerListener = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { bookedSessionsOwner } = useSelector(
    selectBookedSessionsOwnerSelectors
  );

  const { databaseId, bookedSessionsCollectionId } =
    currentUserEnvironmentVariables;
  const dispatch = useDispatch();

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

          dispatch(setBookedSessionsOwner(updatedEntries));
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

            dispatch(setBookedSessionsOwner(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            dispatch(
              setBookedSessionsOwner([...bookedSessionsOwner, updatedEntry])
            );
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [
    dispatch,
    currentUser,
    bookedSessionsOwner,
    bookedSessionsCollectionId,
    databaseId,
  ]);
};

export default useBookedSessionsOwnerListener;
