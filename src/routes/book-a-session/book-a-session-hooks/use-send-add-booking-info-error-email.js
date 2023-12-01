import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";
import useResetStateAndNavigate from "./return-logic-and-reset-state/use-reset-state-and-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../store/book-session/book-session.selector";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import { sendAddBookingInfoErrorEmailAsync } from "../../../store/send-email/send-email.slice";
import { setContactFormDetailsWhenBookingError } from "../../../store/contact-form/contact-form.slice";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../strings/strings";
import { createChildrenToAddToBooking } from "../../../functions/create-children-to-add-to-booking";

const useSendAddBookingInfoErrorEmail = () => {
  const { date } = useConditionalLogic();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  const { fireSwal } = useFireSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);
  const usersChildren = useSelector(selectUsersChildren);
  const dispatch = useDispatch();

  const childName = usersChildren.length ? usersChildren[0].childName : "";
  const parentEmail = usersChildren.length ? usersChildren[0].parentEmail : "";
  const parentName = usersChildren.length ? usersChildren[0].parentName : "";
  const oneChildChosen = childrenSelectedForBooking.join(" ");
  const namesToAddToBooking = childrenSelectedForBooking.join(", ");

  const childrenInBooking = createChildrenToAddToBooking(
    childrenSelectedForBooking,
    childName,
    oneChildChosen,
    namesToAddToBooking
  );

  const message = `Error Adding The Following Booking To The Database. Please Add Manually.\n\n\nSession Booking Data:\n\nDate:\n${date}\n\nSession:\n${sessionType}\n\nChildren In Booking:\n${childrenInBooking}\n\nParent Email:\n${parentEmail}\n\nParent Name:\n${parentName}`;

  const errorToSend = {
    name: "Email Failed To Send Error",
    email: "info@breakfast-and-afterschool-club.com",
    message,
  };

  const sendAddBookingInfoErrorEmail = () => {
    dispatch(sendAddBookingInfoErrorEmailAsync({ message })).then(
      (resultAction) => {
        if (sendAddBookingInfoErrorEmailAsync.fulfilled.match(resultAction)) {
          resetStateAndNavigate(userBookingsRoute);
        } else {
          fireSwal(
            "error",
            failedToSendEmailInstructions,
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              dispatch(setContactFormDetailsWhenBookingError(errorToSend));
              resetStateAndNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendAddBookingInfoErrorEmail };
};

export default useSendAddBookingInfoErrorEmail;
