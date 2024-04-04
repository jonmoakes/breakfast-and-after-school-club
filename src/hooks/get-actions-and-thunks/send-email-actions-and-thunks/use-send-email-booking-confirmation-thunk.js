import { useDispatch } from "react-redux";

import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { sendEmailBookingConfirmationAsync } from "../../../store/send-email/send-email.thunks";

import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import { errorSendingBookingConfirmationEmail } from "../../../strings/errors/errors-strings";
import { getBookingInfoEmailInstructions } from "../../../strings/infos/infos-strings";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

const useSendEmailBookingConfirmationThunk = () => {
  const { name, email } = useGetCurrentUserSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

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
        hamburgerHandlerNavigate(bookedSessionsUserRoute);
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
