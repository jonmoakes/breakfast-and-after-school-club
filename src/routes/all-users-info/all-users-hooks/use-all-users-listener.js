import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import {
  selectGetAllUsersSelectors,
  setAllUsers,
} from "../../../store/get-all-users/get-all-users.slice";

const useAllUsersListener = () => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { allUsers } = useSelector(selectGetAllUsersSelectors);

  const { databaseId, userCollectionId } = currentUserEnvironmentVariables;
  const dispatch = useDispatch();

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

          dispatch(setAllUsers(updatedEntries));
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

            dispatch(setAllUsers(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            dispatch(setAllUsers([...allUsers, updatedEntry]));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, currentUser, allUsers, userCollectionId, databaseId]);
};

export default useAllUsersListener;
