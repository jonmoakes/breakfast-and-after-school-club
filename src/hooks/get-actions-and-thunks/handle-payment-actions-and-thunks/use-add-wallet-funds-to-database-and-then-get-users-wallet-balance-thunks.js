import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useSendErrorUpdatingBalanceEmailThunk from "../send-email-actions-and-thunks/use-send-error-updating-balance-email-thunk";
import useCurrentUserActions from "../current-user-actions-and-thunks/use-current-user-actions";

import { addWalletFundsToDatabaseAsync } from "../../../store/handle-payment/handle-payment.thunks";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import { fundsAddedMessage } from "../../../strings/successes/successes-strings";
import { bookSessionRoute } from "../../../strings/routes/routes-strings";
import {
  failedToUpdateBalanceMessage,
  fundsAddedBalanceUpdateFailedMessage,
} from "../../../strings/errors/errors-strings";

const useAddWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks = () => {
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
  const { sendErrorUpdatingBalanceEmailThunk } =
    useSendErrorUpdatingBalanceEmailThunk();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const addWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks = () => {
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
            sendErrorUpdatingBalanceEmailThunk();
          }
        });
      }
    });
  };

  return { addWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks };
};

export default useAddWalletFundsToDatabaseAndThenGetUsersWalletBalanceThunks;
