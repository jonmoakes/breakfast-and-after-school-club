import { useDispatch } from "react-redux";

import useDatesLogic from "./logic/use-dates-logic";
import useGetBookSessionSelectors from "../../../hooks/get-selectors/use-get-book-session-selectors";
import useGetUsersChildrenSelectors from "../../../hooks/get-selectors/use-get-users-children-selectors";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session.thunks";

import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const useConfirmResult = () => {
  const { date } = useDatesLogic();
  const { usersChildren } = useGetUsersChildrenSelectors();
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();

  const dispatch = useDispatch();

  const {
    id,
    name,
    phoneNumber,
    databaseId,
    termDatesCollectionId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
  } = useGetCurrentUserSelectors();

  const confirmResult = (sessionType, price) => {
    dispatch(
      updateSessionDocAsync({
        date,
        databaseId,
        termDatesCollectionId,
        childrenSelectedForBooking,
        sessionType,
      })
    ).then((resultAction) => {
      if (updateSessionDocAsync.fulfilled.match(resultAction)) {
        dispatch(
          updateUserDocBalanceAsync({
            id,
            databaseId,
            collectionId,
            price,
          })
        ).then((resultAction) => {
          if (updateUserDocBalanceAsync.fulfilled.match(resultAction)) {
            dispatch(
              addSessionBookingInfoAsync({
                id,
                date,
                sessionType,
                childrenSelectedForBooking,
                usersChildren,
                name,
                phoneNumber,
                bookedSessionsCollectionId,
                databaseId,
              })
            ).then((resultAction) => {
              if (addSessionBookingInfoAsync.fulfilled.match(resultAction)) {
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

  return { confirmResult };
};

export default useConfirmResult;
