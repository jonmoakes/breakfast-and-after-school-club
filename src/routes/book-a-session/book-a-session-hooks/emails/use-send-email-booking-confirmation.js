import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectCurrentUserSelectors } from "../../../../store/user/user.slice";
import { selectRequestDateDataSelectors } from "../../../../store/request-date-data/request-date-data.slice";
import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";
import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { sendEmailBookingConfirmationAsync } from "../../../../store/send-email/send-email.thunks";

import { errorSendingBookingConfirmationEmail } from "../../../../strings/errors/errors-strings";
import { getBookingInfoEmailInstructions } from "../../../../strings/infos/infos-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendEmailBookingConfirmation = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { dateData } = useSelector(selectRequestDateDataSelectors);
  const { sessionType, sessionPrice, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();

  const { name, email } = currentUser;
  const date = dateData ? dateData.date : "";

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
