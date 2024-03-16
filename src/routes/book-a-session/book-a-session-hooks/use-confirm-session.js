import useSessionSpacesErrorSwals from "./swals/use-session-spaces-error-swals";
import useCheckForPreviousBookingAndConfirmSession from "./use-check-for-previous-booking-and-confirm-session";
import useSessionLogic from "./logic/use-session-logic";
import useBookSessionActions from "../../../hooks/get-actions/use-book-session-actions";

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
  const { dispatchSetSessionPrice, dispatchSetSessionType } =
    useBookSessionActions();

  const confirmSession = (sessionType, price) => {
    dispatchSetSessionType(sessionType);
    dispatchSetSessionPrice(price);

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
