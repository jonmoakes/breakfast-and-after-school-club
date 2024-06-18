import { useDispatch } from "react-redux";

import useFireSwal from "../../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../../use-hamburger-handler-navigate";

import { dbManageSendEmailBookingConfirmationAsync } from "../../../../store/send-email/send-email.thunks";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";
import { errorSendingBookingConfirmationEmail } from "../../../../strings/errors/errors-strings";
import { emailSentMessage } from "../../../../strings/successes/successes-strings";
import { sendEmailManuallyMessage } from "../../../../strings/infos/infos-strings";
import { removeStarFromChildrensNamesIfExists } from "../../../../functions/remove-star-from-childrens-name-if-exists";

const useSendEmailConfirmationThunk = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const sendEmailConfirmationThunk = (
    date,
    sessionType,
    parentEmail,
    childrenInBooking,
    formattedSessionPrice
  ) => {
    dispatch(
      dbManageSendEmailBookingConfirmationAsync({
        date,
        sessionType,
        parentEmail,
        childrenInBooking:
          removeStarFromChildrensNamesIfExists(childrenInBooking),
        formattedSessionPrice,
      })
    ).then((resultAction) => {
      if (
        dbManageSendEmailBookingConfirmationAsync.fulfilled.match(resultAction)
      ) {
        fireSwal("success", emailSentMessage, "", 0, true, false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(databaseManagementRoute);
            }
          }
        );
      } else {
        fireSwal(
          "error",
          errorSendingBookingConfirmationEmail,
          sendEmailManuallyMessage,
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        });
      }
    });
  };

  return { sendEmailConfirmationThunk };
};

export default useSendEmailConfirmationThunk;
