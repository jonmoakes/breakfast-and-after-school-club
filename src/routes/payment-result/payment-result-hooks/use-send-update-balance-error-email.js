import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import { sendEmailWalletFundsNotAddedErrorAsync } from "../../../store/send-email/send-email.thunks";

import {
  accountRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";

const useSendUpdateBalanceErrorEmail = () => {
  const { id, appOwnerEmail, walletFundsToAdd } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const sendUpdateBalanceErrorEmail = () => {
    dispatch(
      sendEmailWalletFundsNotAddedErrorAsync({
        appOwnerEmail,
        id,
        walletFundsToAdd,
      })
    ).then((resultAction) => {
      if (
        sendEmailWalletFundsNotAddedErrorAsync.fulfilled.match(resultAction)
      ) {
        hamburgerHandlerNavigate(accountRoute);
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

  return { sendUpdateBalanceErrorEmail };
};

export default useSendUpdateBalanceErrorEmail;
