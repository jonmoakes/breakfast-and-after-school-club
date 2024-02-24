import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import { selectRequestDateDataSelectors } from "../../../../store/request-date-data/request-date-data.slice";
import { selectBookSessionSelectors } from "../../../../store/book-session/book-session.slice";
import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";
import { sendEmailBookingConfirmationAsync } from "../../../../store/send-email/send-email.thunks";

import {
  errorSendingBookingConfirmationEmail,
  getBookingInfoEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

import { createChildrenToAddToBooking } from "../../../../functions/create-children-to-add-to-booking";

const useSendEmailBookingConfirmation = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const { dateData } = useSelector(selectRequestDateDataSelectors);
  const { sessionType, sessionPrice, childrenSelectedForBooking } = useSelector(
    selectBookSessionSelectors
  );
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();

  const { name, email, walletBalance } = currentUser;
  const date = dateData ? dateData.date : "";

  const childName =
    usersChildren && usersChildren[0] !== undefined
      ? usersChildren[0].childName
      : "";

  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    childName,
    oneChildChosen,
    namesToAddToBooking
  );

  const sendEmailBookingConfirmation = () => {
    dispatch(
      sendEmailBookingConfirmationAsync({
        email,
        name,
        date,
        sessionType,
        childrenInBooking,
        sessionPrice,
        walletBalance,
      })
    ).then((resultAction) => {
      if (sendEmailBookingConfirmationAsync.fulfilled.match(resultAction)) {
        hamburgerHandlerNavigate(userBookingsRoute);
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
            hamburgerHandlerNavigate(userBookingsRoute);
          }
        });
      }
    });
  };

  return { sendEmailBookingConfirmation };
};

export default useSendEmailBookingConfirmation;
