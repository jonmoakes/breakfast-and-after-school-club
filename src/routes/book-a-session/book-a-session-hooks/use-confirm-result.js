import { useSelector, useDispatch } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { addSessionBookingInfoAsync } from "../../../store/book-session/book-session-thunks";
import {
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";

const useConfirmResult = () => {
  const { date } = useConditionalLogic();

  const usersChildren = useSelector(selectUsersChildren);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const currentUser = useSelector(selectCurrentUser);
  const { id } = currentUser;

  const dispatch = useDispatch();

  const confirmResult = (sessionType, price) => {
    dispatch(
      updateSessionDocAsync({ date, sessionType, childrenSelectedForBooking })
    ).then((resultAction) => {
      if (updateSessionDocAsync.fulfilled.match(resultAction)) {
        dispatch(updateUserDocBalanceAsync({ id, price })).then(
          (resultAction) => {
            if (updateUserDocBalanceAsync.fulfilled.match(resultAction)) {
              dispatch(
                addSessionBookingInfoAsync({
                  date,
                  sessionType,
                  usersChildren,
                  childrenSelectedForBooking,
                })
              );
            }
          }
        );
      }
    });
  };

  return { confirmResult };
};

export default useConfirmResult;
