import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import { selectUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { sendEmailWithErrorAsync } from "../../../../store/send-email/send-email-thunks";
import { setContactFormDetailsWhenBookingError } from "../../../../store/contact-form/contact-form.slice";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

const useSendSessionSpacesAndBalanceErrorEmail = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  let { refundPrice, numberOfChildrenInBooking, totalRefundPrice } =
    useGetRefundPrice();

  const currentUser = useSelector(selectCurrentUser);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);

  const dispatch = useDispatch();

  const { id } = currentUser;

  const { date, sessionType, parentEmail, parentName } =
    userBookingToDelete || {};

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const subject =
    "Breakfast & After School Club - Session Spaces And Balance Not Updated After Cancellation";

  const message = `There Was An Error Updating Session Spaces And Therefore A Users Balance After A Cancelled Booking.\n\nPlease Go Into Your 'Term Dates' Section For The Current Year In The Database And Find The Entry With The Following Date:\n${date}\n\nThen Use These Details To Update The session Spaces:\n\nSession Type: ${sessionType}\n\nSpaces To Add: ${numberOfChildrenInBooking}\n\nFor Example, If The Session Type Is 'morningAndAfternoonShort', Then Increase Both The 'morningSessionSpaces' And The 'afternoonSessionspaces' Fields By ${numberOfChildrenInBooking}'\n\n\nThen, Please Go Into Your 'Users' Section In The Database And Find The User With The Following Id:\n${id}\n\nName:\n${parentName}\n\nEmail:\n${parentEmail}\n\nThen Please Update The Users Wallet Balance To Be Whatever It Is Plus:\n\n${refundAmount}\n\nFor Example, If There Wallet Balance Is Currently 500 ( £5 ), The New Wallet Balance Should Be ${
    Number(500) + refundAmount
  }.`;

  const dataToSendToContactForm = {
    name: "Email Failed To Send Error",
    email: "info@breakfast-and-afterschool-club.com",
    message,
  };
  const sendSessionSpacesAndBalanceErrorEmail = () => {
    dispatch(sendEmailWithErrorAsync({ subject, message })).then(
      (resultAction) => {
        if (sendEmailWithErrorAsync.fulfilled.match(resultAction)) {
          hamburgerHandlerNavigate(userBookingsRoute);
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

  return { sendSessionSpacesAndBalanceErrorEmail };
};

export default useSendSessionSpacesAndBalanceErrorEmail;
