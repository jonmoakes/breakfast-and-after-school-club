import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendSessionSpacesAndBalanceErrorEmail from "../emails/use-send-session-spaces-and-balance-error-email";

import { failedToUpdateBalanceOnCancellationMessage } from "../../../../strings/strings";

const useUpdateSessionSpacesAndBalanceErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendSessionSpacesAndBalanceErrorEmail } =
    useSendSessionSpacesAndBalanceErrorEmail();

  // the session spaces - and therefore the users balance have failed to update here. However the user doesn't need to know about the session spaces as it doesn't affect them.. so we tell them that their balance has not updated and all the relevent data will be sent in the email to the app owner.

  const updateSessionSpacesAndBalanceErrorSwal = () => {
    fireSwal(
      "info",
      failedToUpdateBalanceOnCancellationMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        sendSessionSpacesAndBalanceErrorEmail();
      }
    });
  };

  return { updateSessionSpacesAndBalanceErrorSwal };
};

export default useUpdateSessionSpacesAndBalanceErrorSwal;
