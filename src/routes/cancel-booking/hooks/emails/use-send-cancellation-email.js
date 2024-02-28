import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { selectCurrentUser } from "../../../../store/user/user.selector";
import { selectUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { sendEmailBookingCancellationConfirmationAsync } from "../../../../store/send-email/send-email.thunks";
import { selectGetUsersChildrenSelectors } from "../../../../store/get-users-children/get-users-children.slice";

import {
  errorSendCancellationConfirmationEmailMessage,
  userBookingsRoute,
} from "../../../../strings/strings";

const useSendCancellationEmail = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  let { refundPrice, totalRefundPrice } = useGetRefundPrice();

  const currentUser = useSelector(selectCurrentUser);
  const userBookingToDelete = useSelector(selectUserBookingToDelete);
  const { usersChildren } = useSelector(selectGetUsersChildrenSelectors);

  const dispatch = useDispatch();

  const { name, email } = currentUser;
  const { date, sessionType, childrensName } = userBookingToDelete || {};
  refundPrice = usersChildren.length === 1 ? refundPrice : totalRefundPrice;

  const sendCancellationEmail = () => {
    dispatch(
      sendEmailBookingCancellationConfirmationAsync({
        email,
        name,
        date,
        sessionType,
        childrensName,
        refundPrice,
      })
    ).then((resultAction) => {
      if (
        sendEmailBookingCancellationConfirmationAsync.fulfilled.match(
          resultAction
        )
      ) {
        hamburgerHandlerNavigate(userBookingsRoute);
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
            hamburgerHandlerNavigate(userBookingsRoute);
          }
        });
      }
    });
  };

  return { sendCancellationEmail };
};

export default useSendCancellationEmail;
