import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";

import { selectGetUsersChildrenSelectors } from "../../../store/get-users-children/get-users-children.slice";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session.thunks";
import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

const useConfirmResult = () => {
  const { date } = useConditionalLogic();

  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);
  const { childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const dispatch = useDispatch();

  const { id, name, email, phoneNumber } = currentUser;
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
                usersChildren,
                date,
                sessionType,
                childrenSelectedForBooking,
                email,
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
