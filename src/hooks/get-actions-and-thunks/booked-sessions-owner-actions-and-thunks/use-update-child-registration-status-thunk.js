import { useDispatch } from "react-redux";
import { useState } from "react";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { updateChildSessionRegistrationStatusAsync } from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";

const useUpdateChildRegistrationStatusThunk = () => {
  const { databaseId, bookedSessionsCollectionId: collectionId } =
    useGetCurrentUserSelectors();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const updateChildRegistrationStatusThunk = (
    attributeToUpdate,
    childrenSignedInStatus,
    documentId
  ) => {
    setIsLoading(true);
    dispatch(
      updateChildSessionRegistrationStatusAsync({
        attributeToUpdate,
        childrenSignedInStatus,
        databaseId,
        collectionId,
        documentId,
      })
    ).then((resultAction) => {
      if (
        updateChildSessionRegistrationStatusAsync.fulfilled.match(
          resultAction
        ) ||
        updateChildSessionRegistrationStatusAsync.rejected.match(resultAction)
      ) {
        setIsLoading(false);
      }
    });
  };

  return { updateChildRegistrationStatusThunk, isLoading };
};

export default useUpdateChildRegistrationStatusThunk;
