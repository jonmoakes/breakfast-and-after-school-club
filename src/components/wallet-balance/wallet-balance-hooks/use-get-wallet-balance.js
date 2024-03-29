import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";

import { balanceSuccessfullyReceivedMessage } from "../../../strings/successes/successes-strings";
import { confirmRequestWalletBalance } from "../../../strings/confirms/confirms-strings";
import {
  errorFetchingBalanceMessage,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useGetWalletBalance = () => {
  const {
    id,
    databaseId,
    userCollectionId: collectionId,
    currentUserWalletBalanceResult,
    currentUserWalletBalanceError,
  } = useGetCurrentUserSelectors();
  const {
    dispatchResetCurrentUserWalletBalanceResult,
    dispatchResetCurrentUserWalletBalanceError,
  } = useCurrentUserActions();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

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
    dispatch(getUsersWalletBalanceAsync({ id, databaseId, collectionId })).then(
      (resultAction) => {
        if (getUsersWalletBalanceAsync.fulfilled.match(resultAction)) {
          fireSwal(
            "success",
            balanceSuccessfullyReceivedMessage,
            "",
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              dispatchResetCurrentUserWalletBalanceResult();
            }
          });
        }
      }
    );
  };

  const confirmRequestLatestWalletBalance = () => {
    confirmSwal(confirmRequestWalletBalance, "", "get balance", () =>
      confirmResult()
    );
  };

  return { confirmRequestLatestWalletBalance };
};

export default useGetWalletBalance;
