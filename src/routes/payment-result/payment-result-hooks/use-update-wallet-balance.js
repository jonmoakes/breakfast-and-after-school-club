import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.slice";

import {
  bookSessionRoute,
  failedToUpdateBalanceMessage,
  fundsAddedMessage,
} from "../../../strings/strings";
import useSendUpdateBalanceErrorEmail from "./use-send-update-balance-error-email";

const useUpdateWalletBalance = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendUpdateBalanceErrorEmail } = useSendUpdateBalanceErrorEmail();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const dispatch = useDispatch();
  const { id, email } = currentUser;

  const updateWalletBalance = () => {
    dispatch(addWalletFundsToDatabaseAsync({ id, walletFundsToAdd })).then(
      (resultAction) => {
        if (addWalletFundsToDatabaseAsync.fulfilled.match(resultAction)) {
          fireSwal(
            "success",
            fundsAddedMessage(email),
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(bookSessionRoute);
            }
          });
        } else {
          fireSwal(
            "error",
            failedToUpdateBalanceMessage,
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              sendUpdateBalanceErrorEmail();
            }
          });
        }
      }
    );
  };

  return { updateWalletBalance };
};

export default useUpdateWalletBalance;
