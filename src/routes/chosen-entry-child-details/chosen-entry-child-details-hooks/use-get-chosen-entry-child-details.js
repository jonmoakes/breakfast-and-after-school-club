import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { getChosenEntryChildDetailsAsync } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.thunks";

const useGetChosenEntryChildDetails = (chosenEntry) => {
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );

  const {
    appOwnerId,
    databaseId,
    childrenCollectionId: collectionId,
  } = currentUserEnvironmentVariables;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && currentUser.id !== appOwnerId)) return;
    dispatch(
      getChosenEntryChildDetailsAsync({ chosenEntry, databaseId, collectionId })
    );
  }, [
    chosenEntry,
    currentUser,
    dispatch,
    appOwnerId,
    databaseId,
    collectionId,
  ]);
};

export default useGetChosenEntryChildDetails;
