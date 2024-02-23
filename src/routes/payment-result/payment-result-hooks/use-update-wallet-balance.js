import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useSendUpdateBalanceErrorEmail from "./use-send-update-balance-error-email";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../../../store/user/user.selector";
import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import {
  bookSessionRoute,
  failedToUpdateBalanceMessage,
  fundsAddedMessage,
} from "../../../strings/strings";

const useUpdateWalletBalance = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendUpdateBalanceErrorEmail } = useSendUpdateBalanceErrorEmail();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { databaseId, userCollectionId: collectionId } = envVariables;

  const dispatch = useDispatch();
  const { id, email } = currentUser;

  const updateWalletBalance = () => {
    dispatch(
      addWalletFundsToDatabaseAsync({
        databaseId,
        collectionId,
        id,
        walletFundsToAdd,
      })
    ).then((resultAction) => {
      if (addWalletFundsToDatabaseAsync.fulfilled.match(resultAction)) {
        dispatch(getUsersWalletBalanceAsync({ id, databaseId, collectionId }));
        fireSwal("success", fundsAddedMessage(email), "", 0, true, false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(bookSessionRoute);
            }
          }
        );
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
    });
  };

  return { updateWalletBalance };
};

export default useUpdateWalletBalance;
