import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import {
  manuallyAddBookingDataAsync,
  updateSessionSpacesDocAsync,
} from "../../../store/database-management/database-management-thunks";

import { getNumberOfChildrenInBooking } from "../../../functions/get-number-of-children-in-booking";
import { databaseManagementAddBookingRoute } from "../../../strings/routes/routes-strings";

const useAddBookingAndDeductSessionSpacesThunk = () => {
  const {
    databaseId,
    bookedSessionsCollectionId: collectionId,
    termDatesCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  // This happens when a non app user wants to book a session so the app owner has to do it manually.
  // Because of this, session spaces need to be deducted also.
  const addBookingAndDeductSessionSpacesThunk = (bookingData) => {
    dispatch(
      manuallyAddBookingDataAsync({
        databaseId,
        collectionId,
        bookingData,
      })
    ).then((resultAction) => {
      if (manuallyAddBookingDataAsync.fulfilled.match(resultAction)) {
        const { childrenInBooking, date, sessionType } = bookingData;
        const numberOfChildrenInBooking =
          getNumberOfChildrenInBooking(childrenInBooking);
        const route = databaseManagementAddBookingRoute;
        const operation = "deduct";

        dispatch(
          updateSessionSpacesDocAsync({
            numberOfChildrenInBooking,
            date,
            databaseId,
            termDatesCollectionId,
            route,
            sessionType,
            operation,
          })
        );
      }
    });
  };

  return { addBookingAndDeductSessionSpacesThunk };
};

export default useAddBookingAndDeductSessionSpacesThunk;
