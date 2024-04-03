import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";

import { sendEmailWalletFundsNotAddedErrorAsync } from "../../../store/send-email/send-email.thunks";
import {
  accountRoute,
  contactRoute,
} from "../../../strings/routes/routes-strings";
import { failedToSendEmailInstructions } from "../../../strings/errors/errors-strings";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useSendErrorUpdatingBalanceEmailThunk = () => {
  const { id, appOwnerEmail, walletFundsToAdd } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const sendErrorUpdatingBalanceEmailThunk = () => {
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

  return { sendErrorUpdatingBalanceEmailThunk };
};

export default useSendErrorUpdatingBalanceEmailThunk;
