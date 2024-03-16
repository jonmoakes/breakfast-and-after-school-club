import { useDispatch, useSelector } from "react-redux";

import useDatesLogic from "./dates-logic/use-dates-logic";
import useSelectBookSessionSelectors from "./select-book-session-selectors/use-select-book-session-selectors";

import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";

import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

const useConfirmResult = () => {
  const { date } = useDatesLogic();

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const dispatch = useDispatch();

  const { id, name, phoneNumber } = currentUser;
  const {
    databaseId,
    termDatesCollectionId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
  } = currentUserEnvironmentVariables;

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
