import { useDispatch } from "react-redux";

import useGetBookSessionSelectors from "../../get-selectors/use-get-book-session-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUsersChildrenSelectors from "../../get-selectors/use-get-users-children-selectors";

import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session.thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

const useDispatchBookSessionThunks = () => {
  const {
    id,
    name,
    email,
    phoneNumber,
    databaseId,
    termDatesCollectionId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
  } = useGetCurrentUserSelectors();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();

  const dispatch = useDispatch();

  // Updates the session document, reducing the available spaces by whatever the childrenSelectedForBooking length is.
  // Then updates the users balance in the databse.
  // Then adds the sessionBookingInfo to the database
  // Then fetches the latest balance from the database
  const dispatchBookSessionThunks = (date, sessionType, price) => {
    dispatch(
      updateSessionDocAsync({
        date,
        databaseId,
        termDatesCollectionId,
        childrenSelectedForBooking,
        sessionType,
      })
    ).then((action) => {
      if (action.type === updateSessionDocAsync.fulfilled.type) {
        dispatch(
          updateUserDocBalanceAsync({
            id,
            databaseId,
            collectionId,
            price,
          })
        ).then((action) => {
          if (action.type === updateUserDocBalanceAsync.fulfilled.type) {
            dispatch(
              addSessionBookingInfoAsync({
                id,
                date,
                sessionType,
                childrenSelectedForBooking,
                usersChildren,
                name,
                email,
                phoneNumber,
                bookedSessionsCollectionId,
                databaseId,
              })
            ).then((action) => {
              if (action.type === addSessionBookingInfoAsync.fulfilled.type) {
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
