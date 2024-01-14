import { useDispatch, useSelector } from "react-redux";

import useGetRefundPrice from "../use-get-refund-price";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { sendEmailWithErrorAsync } from "../../../../store/send-email/send-email-thunks";
import { selectCurrentUser } from "../../../../store/user/user.selector";

import {
  contactRoute,
  failedToSendEmailInstructions,
  userBookingsRoute,
} from "../../../../strings/strings";

const useSendBalanceNotUpdatedErrorEmail = () => {
  const { refundPrice, totalRefundPrice, numberOfChildrenInBooking } =
    useGetRefundPrice();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const { id, name, email } = currentUser;

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const subject =
    "Breakfast & After School Club - Users Balance Not Updated After Cancellation";

  const message = `There Was An Error Updating A Users Balance After They Cancelled A Booking.\n\nPlease Go Into Your 'Users' Section In The Database And Find The User With The Following Id:\n${id}\n\nName:\n${name}\n\nEmail:\n${email}\n\nPlease Update The Users Wallet Balance To Be Whatever It Is Plus:\n\n${refundAmount}\n\nFor Example, If There Wallet Balance Is Currently 500 ( £5 ), The New Wallet Balance Should Be ${
    Number(500) + refundAmount
  }.`;

  const sendBalanceNotUpdatedErrorEmail = () => {
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
              hamburgerHandlerNavigate(contactRoute);
            }
          });
        }
      }
    );
  };

  return { sendBalanceNotUpdatedErrorEmail };
};

export default useSendBalanceNotUpdatedErrorEmail;
