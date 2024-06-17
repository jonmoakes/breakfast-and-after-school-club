import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import {
  fetchBookedSessionsOwnerFromTodayOnwardsAsync,
  updateRegistrationStatusAsync,
} from "../../../store/booked-sessions-owner/booked-sessions-owner.thunks";

const useUpdateRegistrationStatusThunk = () => {
  const { databaseId, bookedSessionsCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateRegistrationStatusThunk = (
    attributeToUpdate,
    signInStatus,
    documentId
  ) => {
    dispatch(
      updateRegistrationStatusAsync({
        attributeToUpdate,
        signInStatus,
        databaseId,
        collectionId,
        documentId,
      })
    ).then((resultAction) => {
      if (updateRegistrationStatusAsync.fulfilled.match(resultAction)) {
        dispatch(
          fetchBookedSessionsOwnerFromTodayOnwardsAsync({
            databaseId,
            collectionId,
          })
        );
      }
    });
  };

  return { updateRegistrationStatusThunk };
};

export default useUpdateRegistrationStatusThunk;
