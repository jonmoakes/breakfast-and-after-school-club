import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { fetchBookedSessionsUserAsync } from "../../../store/booked-sessions-user/booked-sessions-user.thunks";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import useBookSessionActions from "./use-book-session-actions";
import useRequestDateDataActions from "../request-date-data-actions-and-thunks/use-request-date-data-actions";
import useSendEmailActions from "../send-email-actions-and-thunks/use-send-email-actions";
import useShouldShowElementActions from "../use-should-show-element-actions";
import useFireSwal from "../../use-fire-swal";
import { errorFetchingUserBookingsWhenWantingToBookAnotherSessionMessage } from "../../../strings/errors/errors-strings";

// This makes sure to fetch the latest bookings after a user confirms they want to book another session.
// If we don't do this, a user could book a session then book the same session again straight after without error, as the only bookings it would know if this function doesn't fire is the bookings before the previous booking was made.
// Ie a user books 4th june for childA. Confirm they want to book another session. The page does not know without fetching the users bookings again that the 4th has been booked for childA, so technically you could book it again by mistake and have a double booking.
const useFetchBookedSessionsUserAfterBookingAndResetBookingState = () => {
  const { id, databaseId, bookedSessionsCollectionId } =
    useGetCurrentUserSelectors();
  const { dispatchResetBookSessionState } = useBookSessionActions();
  const { dispatchResetRequestDateDataState } = useRequestDateDataActions();
  const { dispatchResetSendEmailState } = useSendEmailActions();
  const { dispatchResetShouldShowElementState } = useShouldShowElementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const fetchBookedSessionsUserAfterBookingAndResetBookingState = () => {
    dispatch(
      fetchBookedSessionsUserAsync({
        id,
        databaseId,
        bookedSessionsCollectionId,
      })
    ).then((resultAction) => {
      if (fetchBookedSessionsUserAsync.fulfilled.match(resultAction)) {
        dispatchResetRequestDateDataState();
        dispatchResetShouldShowElementState();
        dispatchResetBookSessionState();
        dispatchResetSendEmailState();
      } else {
        fireSwal(
          "error",
          errorFetchingUserBookingsWhenWantingToBookAnotherSessionMessage,
          "",
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(bookedSessionsUserRoute);
          }
        });
      }
    });
  };

  return { fetchBookedSessionsUserAfterBookingAndResetBookingState };
};

export default useFetchBookedSessionsUserAfterBookingAndResetBookingState;
