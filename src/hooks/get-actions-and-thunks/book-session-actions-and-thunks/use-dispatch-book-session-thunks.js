import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import {
  updateUsersBalanceAsync,
  updateSessionSpacesDocAsync,
  addBookingDataAsync,
} from "../../../store/database-management/database-management-thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import { bookSessionRoute } from "../../../strings/routes/routes-strings";

const useDispatchBookSessionThunks = () => {
  const {
    id,
    databaseId,
    termDatesCollectionId,
    userCollectionId,
    bookedSessionsCollectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  // Updates the session document, reducing the available spaces by whatever the numberOfChildrenInBooking length is.
  // Then updates the users balance in the database.
  // Then adds the sessionBookingInfo to the database
  // Then fetches the latest balance from the database
  const dispatchBookSessionThunks = (
    numberOfChildrenInBooking,
    date,
    sessionType,
    price,
    bookingData
  ) => {
    const route = bookSessionRoute;
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
    ).then((resultAction) => {
      if (updateSessionSpacesDocAsync.fulfilled.match(resultAction)) {
        const usersDocumentId = id;
        const sessionPrice = price;
        const operation = "deduct";
        dispatch(
          updateUsersBalanceAsync({
            usersDocumentId,
            databaseId,
            userCollectionId,
            sessionPrice,
            operation,
          })
        ).then((resultAction) => {
          if (updateUsersBalanceAsync.fulfilled.match(resultAction)) {
            const collectionId = bookedSessionsCollectionId;
            // add these here as they are passed in the dispatchBookSessionThunks action, so initially they are empty strings in 'bookingData'. They are added with their correct values here before firing addBookingDataAsync.
            bookingData.date = date;
            bookingData.sessionType = sessionType;
            dispatch(
              addBookingDataAsync({ databaseId, collectionId, bookingData })
            ).then((resultAction) => {
              if (addBookingDataAsync.fulfilled.match(resultAction)) {
                const collectionId = userCollectionId;
                dispatch(
                  getUsersWalletBalanceAsync({ id, databaseId, collectionId })
                );
              }
            });
          }
        });
      }
    });
  };

  return { dispatchBookSessionThunks };
};

export default useDispatchBookSessionThunks;
