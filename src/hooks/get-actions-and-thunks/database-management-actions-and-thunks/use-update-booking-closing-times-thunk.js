import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { updateBookingClosingTimesAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateBookingClosingTimesThunk = () => {
  const {
    databaseId,
    bookingClosingTimesCollectionId: collectionId,
    bookingClosingTimesDocumentId: documentId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateBookingClosingTimesThunk = (attributeToUpdate, newTime) => {
    dispatch(
      updateBookingClosingTimesAsync({
        attributeToUpdate,
        newTime,
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { updateBookingClosingTimesThunk };
};

export default useUpdateBookingClosingTimesThunk;
