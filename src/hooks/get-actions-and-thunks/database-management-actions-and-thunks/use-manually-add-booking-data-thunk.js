import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { manuallyAddBookingDataAsync } from "../../../store/database-management/database-management-thunks";

const useManuallyAddBookingDataThunk = () => {
  const { databaseId, bookedSessionsCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  // session spaces don't need to be updated as this only runs if there was an error adding booking data when a user booked a session.
  // In this case, the session spaces have already successfully updated before the attempt to add booking data fires.
  const manuallyAddBookingDataThunk = (bookingData) => {
    dispatch(
      manuallyAddBookingDataAsync({
        databaseId,
        collectionId,
        bookingData,
      })
    );
  };

  return { manuallyAddBookingDataThunk };
};

export default useManuallyAddBookingDataThunk;
