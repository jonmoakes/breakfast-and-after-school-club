import { useDispatch, useSelector } from "react-redux";
import {
  addSessionBookingInfoAsync,
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import useConditionalLogic from "./use-conditional-logic";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.actions";

const useConfirmResult = () => {
  const { date } = useConditionalLogic();

  const usersChildren = useSelector(selectUsersChildren);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { id } = currentUser;

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
              ).then((resultAction) => {
                if (addSessionBookingInfoAsync.fulfilled.match(resultAction)) {
                  dispatch(getUsersWalletBalanceAsync({ id }));
                }
              });
            }
          }
        );
      }
    });
  };

  return { confirmResult };
};

export default useConfirmResult;
