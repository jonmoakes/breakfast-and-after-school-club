import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";

import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { selectBookSessionSelectors } from "../../../store/book-session/book-session.slice";

const useConfirmResult = () => {
  const { date } = useConditionalLogic();

  const usersChildren = useSelector(selectUsersChildren);
  const { childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);
  const dispatch = useDispatch();

  const { id } = currentUser;
  const {
    databaseId,
    termDatesCollectionId,
    userCollectionId: collectionId,
    bookedSessionsCollectionId,
  } = envVariables;

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
                bookedSessionsCollectionId,
                databaseId,
              })
            );
          }
        });
      }
    });
  };

  return { confirmResult };
};

export default useConfirmResult;
