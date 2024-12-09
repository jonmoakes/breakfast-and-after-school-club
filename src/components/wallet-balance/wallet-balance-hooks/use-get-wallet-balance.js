import { useEffect } from "react";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";
import useGetWalletBalanceThunk from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-get-wallet-balance-thunk";

import { confirmRequestWalletBalance } from "../../../strings/confirms/confirms-strings";
import {
  errorFetchingBalanceMessage,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetWalletBalance = () => {
  const { currentUserWalletBalanceResult, currentUserWalletBalanceError } =
    useGetCurrentUserSelectors();
  const { getWalletBalanceThunk } = useGetWalletBalanceThunk();

  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!currentUserWalletBalanceResult && !currentUserWalletBalanceError)
      return;

    const error = currentUserWalletBalanceError;
    fireSwal(
      "error",
      errorFetchingBalanceMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatchResetCurrentUserWalletBalanceResult();
        dispatchResetCurrentUserWalletBalanceError();
      }
    });
  }, [
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
    fireSwal,
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  ]);

  const confirmResult = () => {
    getWalletBalanceThunk();
  };

  const confirmRequestLatestWalletBalance = () => {
    confirmSwal(confirmRequestWalletBalance, "", "get balance", () =>
      confirmResult()
    );
  };

  return { confirmRequestLatestWalletBalance };
};

export default useGetWalletBalance;
