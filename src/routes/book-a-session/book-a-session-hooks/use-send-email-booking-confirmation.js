import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "./return-logic-and-reset-state/use-reset-state-and-navigate";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";
import {
  selectSessionType,
  selectSessionPrice,
  selectChildrenSelectedForBooking,
} from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { sendEmailBookingConfirmationAsync } from "../../../store/send-email/send-email-thunks";

import {
  errorSendingBookingConfirmationEmail,
  getBookingInfoEmailInstructions,
  userBookingsRoute,
} from "../../../strings/strings";

import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

const useSendEmailBookingConfirmation = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const requestDateData = useSelector(selectRequestDateData);
  const sessionType = useSelector(selectSessionType);
  const sessionPrice = useSelector(selectSessionPrice);
  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const usersChildren = useSelector(selectUsersChildren);

  const dispatch = useDispatch();

  const { name, email, walletBalance } = currentUser;
  const date = requestDateData ? requestDateData.date : "";
  const childName = usersChildren[0] ? usersChildren[0].childName : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    childName,
    oneChildChosen,
    namesToAddToBooking
  );

  const subject = "Your Breakfast & After School Club Booking Confirmation";

  const sendEmailBookingConfirmation = () => {
    dispatch(
      sendEmailBookingConfirmationAsync({
        email,
        subject,
        name,
        date,
        sessionType,
        childrenInBooking,
        sessionPrice,
        walletBalance,
      })
    ).then((resultAction) => {
      if (sendEmailBookingConfirmationAsync.fulfilled.match(resultAction)) {
        resetStateAndNavigate(userBookingsRoute);
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
            resetStateAndNavigate(userBookingsRoute);
          }
        });
      }
    });
  };

  return { sendEmailBookingConfirmation };
};

export default useSendEmailBookingConfirmation;
