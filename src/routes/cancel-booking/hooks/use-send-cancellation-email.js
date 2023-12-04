import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "./return-logic-and-reset-state/use-reset-state-and-navigate";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectUserBookingToDelete } from "../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { sendBookingCancellationConfirmationEmailAsync } from "../../../store/send-email/send-email-thunks";

import {
  errorSendCancellationConfirmationEmailMessage,
  userBookingsRoute,
} from "../../../strings/strings";
import { selectUsersChildren } from "../../../store/get-users-children/get-users-children.selector";
import useGetRefundPrice from "./use-get-refund-price";

const useSendCancellationEmail = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();
  let { refundPrice, totalRefundPrice } = useGetRefundPrice();

  const currentUser = useSelector(selectCurrentUser);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const usersChildren = useSelector(selectUsersChildren);

  const dispatch = useDispatch();

  const { name, email, walletBalance } = currentUser;

  const { date, sessionType, childrensName } = userBookingToDelete || {};

  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const subject =
    "Your Breakfast & After School Club Booking Cancellation Confirmation";

  const sendCancellationEmail = () => {
    dispatch(
      sendBookingCancellationConfirmationEmailAsync({
        email,
        subject,
        name,
        date,
        sessionType,
        childrensName,
        refundPrice,
        walletBalance,
      })
    ).then((resultAction) => {
      if (
        sendBookingCancellationConfirmationEmailAsync.fulfilled.match(
          resultAction
        )
      ) {
        resetStateAndNavigate(userBookingsRoute);
      } else {
        fireSwal(
          "error",
          errorSendCancellationConfirmationEmailMessage,
          "",
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

  return { sendCancellationEmail };
};

export default useSendCancellationEmail;
