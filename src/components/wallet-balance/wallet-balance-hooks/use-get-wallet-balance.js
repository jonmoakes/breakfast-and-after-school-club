import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
  selectWalletBalanceError,
  selectWalletBalanceResult,
} from "../../../store/user/user.selector";
import { getUsersWalletBalanceAsync } from "../../../store/user/user.thunks";
import {
  resetWalletBalanceError,
  resetWalletBalanceResult,
} from "../../../store/user/user.slice";

import {
  balanceSuccessfullyReceivedMessage,
  confirmRequestWalletBalance,
  errorFetchingBalanceMessage,
  errorReceivedMessage,
} from "../../../strings/strings";

const useGetWalletBalance = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const walletBalanceResult = useSelector(selectWalletBalanceResult);
  const walletBalanceError = useSelector(selectWalletBalanceError);
  const envVariables = useSelector(selectEnvironmentVariables);

  const { id } = currentUser;
  //userCollectionId is being renamed to collectionId
  const { databaseId, userCollectionId: collectionId } = envVariables;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!walletBalanceResult && !walletBalanceError) return;

    const error = walletBalanceError;
    fireSwal(
      "error",
      errorFetchingBalanceMessage,
      errorReceivedMessage(error),
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetWalletBalanceResult());
        dispatch(resetWalletBalanceError());
      }
    });
  }, [dispatch, walletBalanceResult, walletBalanceError, fireSwal]);

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
              dispatch(resetWalletBalanceResult());
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
