import { useDispatch } from "react-redux";

import useSessionSpacesErrorSwals from "./swals/use-session-spaces-error-swals";
import useCheckForPreviousBookingAndConfirmSession from "./use-check-for-previous-booking-and-confirm-session";

import {
  setSessionType,
  setSessionPrice,
} from "../../../store/book-session/book-session.slice";
import useSessionLogic from "./session-logic/use-session-logic";

const useConfirmSession = () => {
  const {
    notEnoughMorningSpacesForMultipleChildren,
    notEnoughAfternoonSpacesForMultipleChildren,
    notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession,
    notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession,
  } = useSessionLogic();

  const {
    morningSessionErrorSwal,
    afternoonSessionErrorSwal,
    morningAndAfternoonSessionMorningErrorSwal,
    morningAndAfternoonSessionAfternoonErrorSwal,
  } = useSessionSpacesErrorSwals();
  const { checkForPreviousBookingAndConfirmSession } =
    useCheckForPreviousBookingAndConfirmSession();

  const dispatch = useDispatch();

  const confirmSession = (sessionType, price) => {
    dispatch(setSessionType(sessionType));
    dispatch(setSessionPrice(price));

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
      checkForPreviousBookingAndConfirmSession(sessionType, price);
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
