import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUserBookingToDeleteSelectors from "../../get-selectors/use-get-user-booking-to-delete-selectors";

import { sendEmailBookingCancellationConfirmationAsync } from "../../../store/send-email/send-email.thunks";

import { bookedSessionsUserRoute } from "../../../strings/routes/routes-strings";
import { errorSendCancellationConfirmationEmailMessage } from "../../../strings/errors/errors-strings";
import { removeStarFromChildrensNamesIfExists } from "../../../functions/remove-star-from-childrens-name-if-exists";
import { emailSentMessage } from "../../../strings/successes/successes-strings";

const useSendCancellationEmailThunk = () => {
  const { name, email } = useGetCurrentUserSelectors();
  const { userBookingToDelete } = useGetUserBookingToDeleteSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const { date, sessionType, childrensName } = userBookingToDelete || {};

  const sendCancellationEmailThunk = (sessionPrice) => {
    dispatch(
      sendEmailBookingCancellationConfirmationAsync({
        email,
        name,
        date,
        sessionType,
        childrensName: removeStarFromChildrensNamesIfExists(childrensName),
        sessionPrice,
      })
    ).then((resultAction) => {
      if (
        sendEmailBookingCancellationConfirmationAsync.fulfilled.match(
          resultAction
        )
      ) {
        fireSwal("success", emailSentMessage, "", 0, true, false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(bookedSessionsUserRoute);
            }
          }
        );
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

  return { sendCancellationEmailThunk };
};

export default useSendCancellationEmailThunk;
