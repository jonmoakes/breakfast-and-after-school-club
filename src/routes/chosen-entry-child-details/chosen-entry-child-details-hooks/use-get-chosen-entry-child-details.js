import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { getChosenEntryChildDetailsAsync } from "../../../store/chosen-entry-child-details/chosen-entry-child-details-thunks";

const useGetChosenEntryChildDetails = (chosenEntry) => {
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const {
    appOwnerId,
    databaseId,
    childrenCollectionId: collectionId,
  } = envVariables;
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
