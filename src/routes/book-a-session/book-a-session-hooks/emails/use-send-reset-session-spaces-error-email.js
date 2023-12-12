import { useDispatch, useSelector } from "react-redux";

import useConditionalLogic from "../use-conditional-logic";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  selectChildrenSelectedForBooking,
  selectSessionType,
} from "../../../../store/book-session/book-session.selector";
import { sendEmailWithErrorAsync } from "../../../../store/send-email/send-email-thunks";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  bookSessionRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../../strings/strings";

const useSendResetSessionSpacesErrorEmail = () => {
  const { date } = useConditionalLogic();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
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

  const message = `Hi,\n\nThere Was Recently An Error Resetting Session Data After Updating A Users Balance Failed, Which Caused A Failed Booking Attempt.\n\nPlease Go Into The Term Dates Section Of Your Database And Find The Following Date:\n${date}\n\nFor The Following Session Type:\n${sessionType}\n\nAdd ${numberOfSpacesToAdd} To It.\n\nFor Example, If On the Date, for The Morning Session, You Had 20 Spaces Left, Add ${numberOfSpacesToAdd} To It To Make ${
    Number(20) + numberOfSpacesToAdd
  }.`;

  const dataToSendToContactForm = {
    name: "Email Failed To Send Error",
    email: "info@breakfast-and-afterschool-club.com",
    message,
  };

  const sendResetSessionSpacesErrorEmail = () => {
    dispatch(sendEmailWithErrorAsync({ subject, message })).then(
      (resultAction) => {
        if (sendEmailWithErrorAsync.fulfilled.match(resultAction)) {
          hamburgerHandlerNavigate(bookSessionRoute);
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
              hamburgerHandlerNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendResetSessionSpacesErrorEmail };
};

export default useSendResetSessionSpacesErrorEmail;
