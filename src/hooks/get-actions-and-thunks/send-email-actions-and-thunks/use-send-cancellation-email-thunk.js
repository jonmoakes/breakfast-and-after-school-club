import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";
import useSendEmailActions from "../../get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-actions";

import { sendEmailBookingCancellationConfirmationAsync } from "../../../store/send-email/send-email.thunks";

import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import { errorSendCancellationConfirmationEmailMessage } from "../../../strings/errors/errors-strings";

const useSendCancellationEmailThunk = () => {
  const { name, email } = useGetCurrentUserSelectors();
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { dispatchResetSendEmailState } = useSendEmailActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const { date, sessionType, childrensName } = userBookingToDelete || {};

  const sendCancellationEmailThunk = (refundPrice) => {
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
        dispatchResetSendEmailState();
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
            dispatchResetSendEmailState();
            hamburgerHandlerNavigate(bookedSessionsUserRoute);
          }
        });
      }
    });
  };

  return { sendCancellationEmailThunk };
};

export default useSendCancellationEmailThunk;
