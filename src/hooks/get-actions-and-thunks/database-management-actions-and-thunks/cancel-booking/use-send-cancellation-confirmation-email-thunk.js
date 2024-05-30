import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../get-selectors/use-get-database-management-selectors";
import { dbManageSendEmailBookingCancellationConfirmationAsync } from "../../../../store/send-email/send-email.thunks";
import useFireSwal from "../../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../../use-hamburger-handler-navigate";

import { emailSentMessage } from "../../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";
import { sendEmailManuallyMessage } from "../../../../strings/infos/infos-strings";
import { errorSendingCancellationEmailMessage } from "../../../../strings/errors/errors-strings";

const useSendCancellationConfirmationEmailThunk = () => {
  const { sessionDate, sessionChildren, typeOfSession, emailOfParent } =
    useGetDatabaseManagementSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const sendCancellationConfirmationEmailThunk = () => {
    dispatch(
      dbManageSendEmailBookingCancellationConfirmationAsync({
        sessionDate,
        typeOfSession,
        emailOfParent,
        sessionChildren,
      })
    ).then((resultAction) => {
      if (
        dbManageSendEmailBookingCancellationConfirmationAsync.fulfilled.match(
          resultAction
        )
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
          errorSendingCancellationEmailMessage,
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

  return { sendCancellationConfirmationEmailThunk };
};

export default useSendCancellationConfirmationEmailThunk;
