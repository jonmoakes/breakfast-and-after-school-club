import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../../../hooks/get-selectors/use-get-user-booking-to-delete-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useGetRefundPrice from "../use-get-refund-price";

import { sendEmailBookingCancellationConfirmationAsync } from "../../../../store/send-email/send-email.thunks";

import { errorSendCancellationConfirmationEmailMessage } from "../../../../strings/errors/errors-strings";
import { bookedSessionsUserRoute } from "../../../../strings/routes/routes-strings";

const useSendCancellationEmail = () => {
  const { name, email } = useGetCurrentUserSelectors();
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { refundPrice } = useGetRefundPrice();

  const dispatch = useDispatch();

  const { date, sessionType, childrensName } = userBookingToDelete || {};

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
        hamburgerHandlerNavigate(bookedSessionsUserRoute);
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
            hamburgerHandlerNavigate(bookedSessionsUserRoute);
          }
        });
      }
    });
  };

  return { sendCancellationEmail };
};

export default useSendCancellationEmail;
