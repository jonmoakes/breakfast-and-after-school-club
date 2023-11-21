import { useDispatch } from "react-redux";

import useConditionalLogic from "./use-conditional-logic";
import useSessionSpacesErrorSwals from "./swals/use-session-spaces-error-swals";
import useCheckForPreviousBookingAndConfirmSession from "./use-check-for-previous-booking-and-confirm-session";

import { setSessionType } from "../../../store/book-session/book-session.slice";

const useConfirmSession = () => {
  const {
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
  const { checkForPreviousBookingAndConfirmSession } =
    useCheckForPreviousBookingAndConfirmSession();

  const dispatch = useDispatch();

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
      checkForPreviousBookingAndConfirmSession(sessionType, price);
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
