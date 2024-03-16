import { useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useCurrentUserSelectors from "../../../../hooks/get-selectors/use-current-user-selectors";
import useDatesLogic from "../dates-logic/use-dates-logic";

import { sendEmailBookingConfirmationAsync } from "../../../../store/send-email/send-email.thunks";

import { errorSendingBookingConfirmationEmail } from "../../../../strings/errors/errors-strings";
import { getBookingInfoEmailInstructions } from "../../../../strings/infos/infos-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";
import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";
import useGetChildrenLogic from "../get-children-logic/use-get-children-logic";

const useSendEmailBookingConfirmation = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { name, email } = useCurrentUserSelectors();
  const { date } = useDatesLogic();
  const { sessionType, sessionPrice, childrenSelectedForBooking } =
    useSelectBookSessionSelectors();
  const { usersChildren } = useGetChildrenLogic();

  const dispatch = useDispatch();

  const sendEmailBookingConfirmation = () => {
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

  return { sendEmailBookingConfirmation };
};

export default useSendEmailBookingConfirmation;
