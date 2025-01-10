import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { getChosenEntryChildDetailsAsync } from "../../../store/chosen-entry-child-details/chosen-entry-child-details.thunks";

const useGetChosenEntryChildDetailsThunkUseEffect = (
  childrensNamesInBooking
) => {
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
        childrensNamesInBooking,
        databaseId,
        collectionId,
      })
    );
  }, [
    childrensNamesInBooking,
    currentUser,
    dispatch,
    appOwnerId,
    databaseId,
    collectionId,
  ]);
};

export default useGetChosenEntryChildDetailsThunkUseEffect;
