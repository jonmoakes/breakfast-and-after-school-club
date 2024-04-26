import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { manuallyAddBookingDataAfterErrorAsync } from "../../../store/database-management/database-management-thunks";

const useManuallyAddBookingDataAfterErrorThunk = () => {
  const { databaseId, bookedSessionsCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const manuallyAddBookingDataAfterErrorThunk = (bookingData) => {
    dispatch(
      manuallyAddBookingDataAfterErrorAsync({
        databaseId,
        collectionId,
        bookingData,
      })
    );
  };

  return { manuallyAddBookingDataAfterErrorThunk };
};

export default useManuallyAddBookingDataAfterErrorThunk;
