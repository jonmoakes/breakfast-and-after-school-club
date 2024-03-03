import { useSelector, useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import { selectCurrentUserSelectors } from "../../../store/user/user.slice";
import { selectWalletFundsToAddSelectors } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.slice";
import { sendEmailWalletFundsNotAddedErrorAsync } from "../../../store/send-email/send-email.thunks";

import {
  accountRoute,
  contactRoute,
  failedToSendEmailInstructions,
} from "../../../strings/strings";

const useSendUpdateBalanceErrorEmail = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const { currentUser, currentUserEnvironmentVariables } = useSelector(
    selectCurrentUserSelectors
  );
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

  const dispatch = useDispatch();
  const { id } = currentUser;
  const { appOwnerEmail } = currentUserEnvironmentVariables;

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
