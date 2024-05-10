import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../get-selectors/use-get-current-user-selectors";

import { addBookingDataAsync } from "../../../../store/database-management/database-management-thunks";

const useAddBookingDataThunk = () => {
  const { databaseId, bookedSessionsCollectionId: collectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  // balance or session spaces don't need to be updated as this only runs if there was an error adding booking data when a user booked a session.
  // In this case, the balance and session spaces have already successfully updated before the attempt to add booking data fires.
  const addBookingDataThunk = (bookingData) => {
    dispatch(
      addBookingDataAsync({
        databaseId,
        collectionId,
        bookingData,
      })
    );
  };

  return { addBookingDataThunk };
};

export default useAddBookingDataThunk;
