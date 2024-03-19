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

  // receives sessionType And Price from whichever button is clicked. Need to be passed to checkForPreviousBookingAndConfirmSession(sessionType, price) to avoid closure issue where if tried to use the selector for the value, it  doesn't pick up the latest value.
  const confirmSession = (sessionType, price) => {
    dispatchSetSessionType(sessionType);
    dispatchSetSessionPrice(price);

    if (notEnoughMorningSpacesForMultipleChildren()) {
      morningSessionErrorSwal();
    } else if (notEnoughAfternoonSpacesForMultipleChildren()) {
      afternoonSessionErrorSwal();
    } else if (
      notEnoughMorningSpacesForMultipleChildrenInMorningAndAfternoonSession()
    ) {
      morningAndAfternoonSessionMorningErrorSwal();
    } else if (
      notEnoughAfternoonSpacesForMultipleChildrenInMorningAndAfternoonSession()
    ) {
      morningAndAfternoonSessionAfternoonErrorSwal();
    } else {
      checkForPreviousBookingAndConfirmSession(sessionType, price);
    }
  };

  return { confirmSession };
};

export default useConfirmSession;
