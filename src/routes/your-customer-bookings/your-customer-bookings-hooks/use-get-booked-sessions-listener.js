import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectBookedSessionsSelectors } from "../../../store/booked-sessions/booked-sessions.slice";
import { setBookedSessions } from "../../../store/booked-sessions/booked-sessions.slice";

const useGetBookedSessionsListener = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { bookedSessions } = useSelector(selectBookedSessionsSelectors);

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

          const updatedEntries = bookedSessions.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setBookedSessions(updatedEntries));
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = bookedSessions.findIndex(
            (session) => session.$id === updatedEntry.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = bookedSessions.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...updatedEntry }
                : session
            );

            dispatch(setBookedSessions(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            dispatch(setBookedSessions([...bookedSessions, updatedEntry]));
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
    bookedSessions,
    bookedSessionsCollectionId,
    databaseId,
  ]);
};

export default useGetBookedSessionsListener;
