import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useSendUpdateBalanceErrorEmail from "./use-send-update-balance-error-email";
import useGetEnvironmentVariables from "../../../hooks/use-get-environment-variables";

import { selectWalletFundsToAdd } from "../../../store/wallet-funds-to-add/wallet-funds-to-add.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.slice";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.actions";

import {
  bookSessionRoute,
  failedToUpdateBalanceMessage,
  fundsAddedMessage,
} from "../../../strings/strings";

const useUpdateWalletBalance = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendUpdateBalanceErrorEmail } = useSendUpdateBalanceErrorEmail();
  const { databaseId, userCollectionId: collectionId } =
    useGetEnvironmentVariables();

  const currentUser = useSelector(selectCurrentUser);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

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
