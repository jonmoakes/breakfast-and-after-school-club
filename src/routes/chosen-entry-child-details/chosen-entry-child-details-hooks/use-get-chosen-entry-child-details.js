import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useChosenEntryChildDetailsLogic from "./use-chosen-entry-child-details-logic";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import { getChosenEntryChildDetailsAsync } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.thunks";

const useGetChosenEntryChildDetails = () => {
  const { childrensNamesInChosenEntry } = useChosenEntryChildDetailsLogic();
  const {
    currentUser,
    appOwnerId,
    databaseId,
    childrenCollectionId: collectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && currentUser.id !== appOwnerId)) return;
    dispatch(
      getChosenEntryChildDetailsAsync({
        childrensNamesInChosenEntry,
        databaseId,
        collectionId,
      })
    );
  }, [
    childrensNamesInChosenEntry,
    currentUser,
    dispatch,
    appOwnerId,
    databaseId,
    collectionId,
  ]);
};

export default useGetChosenEntryChildDetails;
