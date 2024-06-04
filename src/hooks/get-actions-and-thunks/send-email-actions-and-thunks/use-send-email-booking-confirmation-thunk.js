import { useDispatch } from "react-redux";

import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useFetchBookedSessionsUserAfterBookingAndResetBookingState from "../book-session-actions-and-thunks/use-fetch-booked-sessions-user-after-booking-and-reset-booking-state";
import { sendEmailBookingConfirmationAsync } from "../../../store/send-email/send-email.thunks";
import useConfirmSwal from "../../use-confirm-swal";

import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import { errorSendingBookingConfirmationEmail } from "../../../strings/errors/errors-strings";
import {
  bookAnotherButtonText,
  getBookingInfoEmailInstructions,
} from "../../../strings/infos/infos-strings";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

import { bookAnotherSessionQuestion } from "../../../strings/confirms/confirms-strings";

const useSendEmailBookingConfirmationThunk = () => {
  const { name, email } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fetchBookedSessionsUserAfterBookingAndResetBookingState } =
    useFetchBookedSessionsUserAfterBookingAndResetBookingState();

  const dispatch = useDispatch();

  const sendEmailBookingConfirmationThunk = (
    date,
    sessionType,
    childrenSelectedForBooking,
    usersChildren,
    sessionPrice
  ) => {
    dispatch(
      sendEmailBookingConfirmationAsync({
        email,
        name,
        date,
        sessionType,
        childrenInBooking: createChildrenToAddToBooking(
          childrenSelectedForBooking,
          usersChildren
        ),
        sessionPrice,
      })
    ).then((resultAction) => {
      if (sendEmailBookingConfirmationAsync.fulfilled.match(resultAction)) {
        const confirmResult = () => {
          fetchBookedSessionsUserAfterBookingAndResetBookingState();
          // dispatchResetRequestDateDataState();
          // dispatchResetShouldShowElementState();
          // dispatchResetBookSessionState();
          // dispatchResetSendEmailState();
        };

        const cancelResult = () => {
          hamburgerHandlerNavigate(bookedSessionsUserRoute);
        };

        confirmSwal(
          bookAnotherSessionQuestion,
          "",
          bookAnotherButtonText,
          confirmResult,
          cancelResult
        );
      } else {
        fireSwal(
          "error",
          errorSendingBookingConfirmationEmail,
          getBookingInfoEmailInstructions,
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            //don't need to do anything else as swal tells user to contact if they need the confirmation email.
            hamburgerHandlerNavigate(bookedSessionsUserRoute);
          }
        });
      }
    });
  };

  return { sendEmailBookingConfirmationThunk };
};

export default useSendEmailBookingConfirmationThunk;
