import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";

import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.actions";

const useConfirmResult = () => {
  const { date } = useConditionalLogic();

  const usersChildren = useSelector(selectUsersChildren);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const { schoolCode, id } = currentUser;
  const {
    databaseId,
    termDatesCollectionId: collectionId,
    userCollectionId,
    bookedSessionsCollectionId,
  } = envVariables;

  const confirmResult = (sessionType, price) => {
    dispatch(
      updateSessionDocAsync({
        date,
        databaseId,
        collectionId,
        childrenSelectedForBooking,
        sessionType,
      })
    ).then((resultAction) => {
      if (updateSessionDocAsync.fulfilled.match(resultAction)) {
        dispatch(
          updateUserDocBalanceAsync({
            schoolCode,
            id,
            price,
            databaseId,
            userCollectionId,
          })
        ).then((resultAction) => {
          if (updateUserDocBalanceAsync.fulfilled.match(resultAction)) {
            dispatch(
              addSessionBookingInfoAsync({
                usersChildren,
                date,
                sessionType,
                childrenSelectedForBooking,
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
