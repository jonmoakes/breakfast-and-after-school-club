import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../../store/user/user.selector";
import { selectUserBookingToDelete } from "../../../../store/user-booking-to-delete/user-booking-to-delete.selector";
import { sendEmailResetSessionSpacesAndBalanceErrorAsync } from "../../../../store/send-email/send-email.thunks";

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
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const { id } = currentUser;
  const { appOwnerEmail } = envVariables;

  const { date, sessionType } = userBookingToDelete || {};

  const refundAmount =
    numberOfChildrenInBooking > 1 ? totalRefundPrice : refundPrice;

  const sendSessionSpacesAndBalanceErrorEmail = () => {
    dispatch(
      sendEmailResetSessionSpacesAndBalanceErrorAsync({
        appOwnerEmail,
        date,
        sessionType,
        numberOfChildrenInBooking,
        id,
        refundAmount,
      })
    ).then((resultAction) => {
      if (
        sendEmailResetSessionSpacesAndBalanceErrorAsync.fulfilled.match(
          resultAction
        )
      ) {
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
    });
  };

  return { sendSessionSpacesAndBalanceErrorEmail };
};

export default useSendSessionSpacesAndBalanceErrorEmail;
