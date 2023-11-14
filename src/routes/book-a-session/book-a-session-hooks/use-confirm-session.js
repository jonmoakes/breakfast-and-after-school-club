import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useSessionSpacesErrorSwals from "./swals/use-session-spaces-error-swals";
import useCheckForPreviousBookingAndHandleBooking from "./use-check-for-previous-booking-and-handle-booking";

import { selectChildrenSelectedForBooking } from "../../../store/book-session/book-session.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { setSessionType } from "../../../store/book-session/book-session.slice";
import { addSessionBookingInfoAsync } from "../../../store/book-session/book-session-thunks";

import {
  updateSessionDocAsync,
  updateUserDocBalanceAsync,
} from "../../../store/book-session/book-session-thunks";

const useConfirmSession = () => {
  const {
    date,
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
  } = useConditionalLogic();
  const {
    morningSessionErrorSwal,
    afternoonSessionErrorSwal,
    morningAndAfternoonSessionMorningErrorSwal,
    morningAndAfternoonSessionAfternoonErrorSwal,
  } = useSessionSpacesErrorSwals();
  const { checkForPreviousBookingAndHandleBooking } =
    useCheckForPreviousBookingAndHandleBooking();

  const currentUser = useSelector(selectCurrentUser);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const usersChildren = useSelector(selectUsersChildren);

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

  const confirmSession = (sessionType, price) => {
    dispatch(setSessionType(sessionType));

    if (notEnoughMorningSpacesForMultipleChildren(sessionType)) {
      morningSessionErrorSwal();
    } else if (notEnoughAfternoonSpacesForMultipleChildren(sessionType)) {
      afternoonSessionErrorSwal();
    } else if (
      notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession(
        sessionType
      )
    ) {
      morningAndAfternoonSessionMorningErrorSwal();
    } else if (
      notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession(
        sessionType
      )
    ) {
      morningAndAfternoonSessionAfternoonErrorSwal();
    } else {
      checkForPreviousBookingAndHandleBooking(
        sessionType,
        price,
        confirmResult
      );
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
