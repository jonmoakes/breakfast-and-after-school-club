import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";
import useResetStateAndNavigate from "./return-logic-and-reset-state/use-reset-state-and-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../store/book-session/book-session.selector";
import { sendEmailWithErrorAsync } from "../../../store/send-email/send-email-thunks";
import { setContactFormDetailsWhenBookingError } from "../../../store/contact-form/contact-form.slice";

import {
  bookSessionRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../strings/strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useConditionalLogic();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  const { fireSwal } = useFireSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );
  const sessionType = useSelector(selectSessionType);

  const dispatch = useDispatch();

  const numberOfSpacesToAdd = childrenSelectedForBooking.length
    ? childrenSelectedForBooking.length
    : 1;

  const subject =
    "Breakfast & After School Club - Error Resetting Session Data";

  const message = `There Was An Error Resetting Session Data After Updating A Users Balance Failed, Which Caused A Failed Booking Attempt. Please Add The Following To The Database Manually:\n_____________\nDate:\n${date}\n\nSession Type:\n${sessionType}\n\nSpaces To Add:\n${numberOfSpacesToAdd}`;

  const dataToSendToContactForm = {
    name: "Email Failed To Send Error",
    email: "info@breakfast-and-afterschool-club.com",
    message,
  };

  const sendResetSessionSpacesErrorEmail = () => {
    dispatch(sendEmailWithErrorAsync({ subject, message })).then(
      (resultAction) => {
        if (sendEmailWithErrorAsync.fulfilled.match(resultAction)) {
          resetStateAndNavigate(bookSessionRoute);
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
              dispatch(
                setContactFormDetailsWhenBookingError(dataToSendToContactForm)
              );
              resetStateAndNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendResetSessionSpacesErrorEmail };
};

export default useSendResetSessionSpacesErrorEmail;
