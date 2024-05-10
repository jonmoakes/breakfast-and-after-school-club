import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../get-selectors/use-get-current-user-selectors";

import {
  addBookingDataAsync,
  updateSessionSpacesDocAsync,
  updateUsersBalanceAsync,
} from "../../../../store/database-management/database-management-thunks";

import { databaseManagementAddBookingRoute } from "../../../../strings/routes/routes-strings";

const useAddBookingUpdateBalanceDeductSessionSpacesThunk = () => {
  const {
    databaseId,
    bookedSessionsCollectionId: collectionId,
    termDatesCollectionId,
    userCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  // This happens when an app user wants the app owner  to book a session for them for whatever reason.
  // Because of this, the balance needs to be updated and session spaces need to be deducted too.
  const addBookingUpdateBalanceDeductSessionSpacesThunk = (
    bookingData,
    refundPrice,
    numberOfChildrenInBooking
  ) => {
    dispatch(
      addBookingDataAsync({
        databaseId,
        collectionId,
        bookingData,
      })
    ).then((resultAction) => {
      if (addBookingDataAsync.fulfilled.match(resultAction)) {
        const usersDocumentId = bookingData.parentsUserId;
        dispatch(
          updateUsersBalanceAsync({
            usersDocumentId,
            databaseId,
            userCollectionId,
            refundPrice,
          })
        ).then((resultAction) => {
          if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
            const { date, sessionType } = bookingData;
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
      }
    });
  };

  return { addBookingUpdateBalanceDeductSessionSpacesThunk };
};

export default useAddBookingUpdateBalanceDeductSessionSpacesThunk;
