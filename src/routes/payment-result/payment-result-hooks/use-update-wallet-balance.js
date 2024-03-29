import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useSendUpdateBalanceErrorEmail from "./use-send-update-balance-error-email";

import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import { bookSessionRoute } from "../../../strings/routes/routes-strings";
import {
  failedToUpdateBalanceMessage,
  fundsAddedBalanceUpdateFailedMessage,
} from "../../../strings/errors/errors-strings";
import { fundsAddedMessage } from "../../../strings/successes/successes-strings";

const useUpdateWalletBalance = () => {
  const {
    databaseId,
    userCollectionId: collectionId,
    id,
    email,
    walletFundsToAdd,
  } = useGetCurrentUserSelectors();
  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendUpdateBalanceErrorEmail } = useSendUpdateBalanceErrorEmail();

  const dispatch = useDispatch();

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
        dispatch(
          getUsersWalletBalanceAsync({ id, databaseId, collectionId })
        ).then((resultAction) => {
          if (getUsersWalletBalanceAsync.fulfilled.match(resultAction)) {
            fireSwal(
              "success",
              fundsAddedMessage(email),
              "",
              0,
              true,
              false
            ).then((isConfirmed) => {
              if (isConfirmed) {
                dispatchResetCurrentUserWalletBalanceResult();
                hamburgerHandlerNavigate(bookSessionRoute);
              }
            });
          } else {
            fireSwal(
              "info",
              fundsAddedBalanceUpdateFailedMessage,
              "",
              0,
              true,
              false
            ).then((isConfirmed) => {
              if (isConfirmed) {
                dispatchResetCurrentUserWalletBalanceResult();
                dispatchResetCurrentUserWalletBalanceError();
                hamburgerHandlerNavigate(bookSessionRoute);
              }
            });
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
    });
  };

  return { updateWalletBalance };
};

export default useUpdateWalletBalance;
